import { useEffect, useState, useCallback } from "react";
import { supabase, type Profile } from "@/lib/supabase";

export type StockItem = {
  code: string;
  name: string;
  category: string;
  subCategory: string;
  brand: string;
  subBrand: string;
  model: string;
  unit: string;
  qty: number;
  purchasePrice: number;
  sellingPrice: number;
};

export type PaymentMethod = "Cash" | "Bank" | "Khalti" | "eSewa" | "Other Bank";

export const PAYMENT_METHODS: PaymentMethod[] = ["Cash", "Bank", "Khalti", "eSewa", "Other Bank"];

export type BillItem = {
  itemCode: string;
  itemName: string;
  category: string;
  subCategory: string;
  brand: string;
  model: string;
  qty: number;
  rate: number;
  amount: number;
  vat: number;
  total: number;
};

export type Sale = {
  id: string;
  invoiceNo: string;
  date: string;
  customer: string;
  itemName: string;
  itemCode: string;
  category: string;
  subCategory: string;
  brand: string;
  model: string;
  qty: number;
  rate: number;
  amount: number;
  vat: number;
  total: number;
  paymentMethod: PaymentMethod;
};

export const VAT_RATE = 0.13;

type State = { stock: StockItem[]; sales: Sale[] };

const listeners = new Set<() => void>();
let state: State = { stock: [], sales: [] };
let loaded = false;

function emit() {
  listeners.forEach((l) => l());
}

function mapStockRow(r: Record<string, unknown>): StockItem {
  return {
    code: r.code as string,
    name: r.name as string,
    category: r.category as string,
    subCategory: r.sub_category as string,
    brand: r.brand as string,
    subBrand: r.sub_brand as string,
    model: r.model as string,
    unit: r.unit as string,
    qty: r.qty as number,
    purchasePrice: r.purchase_price as number,
    sellingPrice: r.selling_price as number,
  };
}

function mapSaleRow(r: Record<string, unknown>): Sale {
  return {
    id: r.id as string,
    invoiceNo: r.invoice_no as string,
    date: r.date as string,
    customer: r.customer as string,
    itemName: r.item_name as string,
    itemCode: r.item_code as string,
    category: r.category as string,
    subCategory: r.sub_category as string,
    brand: r.brand as string,
    model: r.model as string,
    qty: r.qty as number,
    rate: r.rate as number,
    amount: r.amount as number,
    vat: r.vat as number,
    total: r.total as number,
    paymentMethod: r.payment_method as PaymentMethod,
  };
}

export function useStore() {
  const [snapshot, setSnapshot] = useState(state);

  const load = useCallback(async () => {
    const [stockRes, salesRes] = await Promise.all([
      supabase.from("stock").select("*").order("name"),
      supabase.from("sales").select("*").order("created_at", { ascending: false }),
    ]);

    state = {
      stock: (stockRes.data ?? []).map(mapStockRow),
      sales: (salesRes.data ?? []).map(mapSaleRow),
    };
    loaded = true;
    emit();
  }, []);

  useEffect(() => {
    const l = () => setSnapshot({ ...state });
    listeners.add(l);
    if (!loaded) load();
    l();
    return () => {
      listeners.delete(l);
    };
  }, [load]);

  return snapshot;
}

export function nextInvoiceNo(sales: Sale[]) {
  const max = sales.reduce((acc, s) => {
    const n = Number(s.invoiceNo.replace(/\D/g, ""));
    return Number.isFinite(n) && n > acc ? n : acc;
  }, 0);
  return `BM_INV${String(max + 1).padStart(4, "0")}`;
}

export async function addBill(
  invoiceNo: string,
  date: string,
  customer: string,
  paymentMethod: PaymentMethod,
  items: BillItem[],
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const rows = items.map((item) => ({
    invoice_no: invoiceNo,
    date,
    customer,
    item_name: item.itemName,
    item_code: item.itemCode,
    category: item.category,
    sub_category: item.subCategory,
    brand: item.brand,
    model: item.model,
    qty: item.qty,
    rate: item.rate,
    amount: item.amount,
    vat: item.vat,
    total: item.total,
    payment_method: paymentMethod,
    created_by: user?.id ?? null,
  }));

  const { error } = await supabase.from("sales").insert(rows);

  if (!error) {
    for (const item of items) {
      await supabase.rpc("decrement_stock", { item_name: item.itemName, qty_sold: item.qty });
    }
    await reload();
  }
  return { error };
}

export async function deleteSale(id: string) {
  const sale = state.sales.find((s) => s.id === id);
  if (sale) {
    await supabase.from("sales").delete().eq("id", id);
    await supabase.rpc("increment_stock", { item_name: sale.itemName, qty_returned: sale.qty });
    await reload();
  }
}

export async function deleteInvoice(invoiceNo: string) {
  const items = state.sales.filter((s) => s.invoiceNo === invoiceNo);
  if (items.length > 0) {
    await supabase.from("sales").delete().eq("invoice_no", invoiceNo);
    for (const item of items) {
      await supabase.rpc("increment_stock", { item_name: item.itemName, qty_returned: item.qty });
    }
    await reload();
  }
}

export async function upsertStock(item: StockItem, originalCode?: string) {
  const key = originalCode ?? item.code;
  const { data: existing } = await supabase.from("stock").select("code").eq("code", key).single();

  if (existing) {
    await supabase
      .from("stock")
      .update({
        code: item.code,
        name: item.name,
        category: item.category,
        sub_category: item.subCategory,
        brand: item.brand,
        sub_brand: item.subBrand,
        model: item.model,
        unit: item.unit,
        qty: item.qty,
        purchase_price: item.purchasePrice,
        selling_price: item.sellingPrice,
        updated_at: new Date().toISOString(),
      })
      .eq("code", key);
  } else {
    await supabase.from("stock").insert({
      code: item.code,
      name: item.name,
      category: item.category,
      sub_category: item.subCategory,
      brand: item.brand,
      sub_brand: item.subBrand,
      model: item.model,
      unit: item.unit,
      qty: item.qty,
      purchase_price: item.purchasePrice,
      selling_price: item.sellingPrice,
    });
  }
  await reload();
}

export async function deleteStock(code: string) {
  await supabase.from("stock").delete().eq("code", code);
  await reload();
}

export async function nextItemCode(): Promise<string> {
  const { data } = await supabase
    .from("stock")
    .select("code")
    .order("code", { ascending: false })
    .limit(1);
  if (!data || data.length === 0) return "1";
  const n = Number(String(data[0].code).replace(/\D/g, ""));
  return String((Number.isFinite(n) ? n : 0) + 1);
}

async function reload() {
  const [stockRes, salesRes] = await Promise.all([
    supabase.from("stock").select("*").order("name"),
    supabase.from("sales").select("*").order("created_at", { ascending: false }),
  ]);

  state = {
    stock: (stockRes.data ?? []).map(mapStockRow),
    sales: (salesRes.data ?? []).map(mapSaleRow),
  };
  emit();
}
