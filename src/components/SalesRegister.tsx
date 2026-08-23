import { useMemo, useState } from "react";
import { Download, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  addBill,
  deleteInvoice,
  nextInvoiceNo,
  useStore,
  VAT_RATE,
  PAYMENT_METHODS,
  type PaymentMethod,
  type BillItem,
} from "@/lib/store";
import { exportRows } from "@/lib/excel";

const money = (n: number) =>
  n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function SalesRegister() {
  const { stock, sales } = useStore();
  const invoiceNo = nextInvoiceNo(sales);

  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [customer, setCustomer] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Cash");

  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState(1);
  const [itemRate, setItemRate] = useState(0);

  const [billItems, setBillItems] = useState<BillItem[]>([]);
  const [saving, setSaving] = useState(false);

  const suggestions = useMemo(() => {
    const t = itemName.trim().toLowerCase();
    if (!t) return [];
    const exact = stock.some((i) => i.name.toLowerCase() === t);
    if (exact) return [];
    return stock.filter((i) => i.name.toLowerCase().includes(t)).slice(0, 8);
  }, [stock, itemName]);

  const matched = useMemo(
    () => stock.find((i) => i.name.toLowerCase() === itemName.trim().toLowerCase()),
    [stock, itemName],
  );

  const billSubtotal = billItems.reduce((a, i) => a + i.amount, 0);
  const billVat = billItems.reduce((a, i) => a + i.vat, 0);
  const billTotal = billItems.reduce((a, i) => a + i.total, 0);

  function pick(name: string) {
    const item = stock.find((i) => i.name === name);
    setItemName(name);
    if (item?.sellingPrice) setItemRate(item.sellingPrice);
  }

  function addToBill() {
    if (!itemName.trim()) {
      toast.error("Select an item");
      return;
    }
    if (itemQty <= 0 || itemRate <= 0) {
      toast.error("Enter valid quantity and rate");
      return;
    }
    const amount = itemQty * itemRate;
    const vat = amount * VAT_RATE;
    const newItem: BillItem = {
      itemCode: matched?.code ?? "",
      itemName: matched?.name ?? itemName.trim(),
      category: matched?.category ?? "",
      subCategory: matched?.subCategory ?? "",
      brand: matched?.brand ?? "",
      model: matched?.model ?? "",
      qty: itemQty,
      rate: itemRate,
      amount,
      vat,
      total: amount + vat,
    };
    setBillItems((prev) => [...prev, newItem]);
    setItemName("");
    setItemQty(1);
    setItemRate(0);
  }

  function removeBillItem(index: number) {
    setBillItems((prev) => prev.filter((_, i) => i !== index));
  }

  async function saveBill() {
    if (!customer.trim()) {
      toast.error("Enter customer name");
      return;
    }
    if (billItems.length === 0) {
      toast.error("Add at least one item to the bill");
      return;
    }
    setSaving(true);
    const { error } = await addBill(invoiceNo, date, customer.trim(), paymentMethod, billItems);
    setSaving(false);
    if (error) {
      toast.error(`Save failed: ${error.message}`);
      return;
    }
    setCustomer("");
    setBillItems([]);
    setPaymentMethod("Cash");
    toast.success(`${invoiceNo} saved with ${billItems.length} items`);
  }

  function onExport() {
    if (sales.length === 0) {
      toast.error("No sales to export");
      return;
    }
    exportRows(
      sales.map((s) => ({
        Date: s.date,
        "Invoice No": s.invoiceNo,
        Customer: s.customer,
        "Item Code": s.itemCode,
        Item: s.itemName,
        "Sub Category": s.subCategory,
        Category: s.category,
        Brand: s.brand,
        Model: s.model,
        Qty: s.qty,
        Rate: s.rate,
        Amount: s.amount,
        "VAT 13%": s.vat,
        Total: s.total,
        "Payment Method": s.paymentMethod,
      })),
      "Sales",
      `BM_Sales_${new Date().toISOString().slice(0, 10)}.xlsx`,
    );
  }

  const groupedSales = useMemo(() => {
    const groups = new Map<string, { header: (typeof sales)[0]; items: typeof sales }>();
    for (const s of sales) {
      const existing = groups.get(s.invoiceNo);
      if (existing) {
        existing.items.push(s);
      } else {
        groups.set(s.invoiceNo, { header: s, items: [s] });
      }
    }
    return [...groups.values()];
  }, [sales]);

  const grand = sales.reduce((a, s) => a + s.total, 0);

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="grid gap-3 md:grid-cols-3">
          <div>
            <Label htmlFor="s-date">Date</Label>
            <Input id="s-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="s-inv">Invoice no (auto)</Label>
            <Input id="s-inv" value={invoiceNo} readOnly className="bg-muted font-mono" />
          </div>
          <div>
            <Label htmlFor="s-cust">Customer name</Label>
            <Input
              id="s-cust"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              placeholder="Customer"
            />
          </div>
          <div>
            <Label>Payment Method</Label>
            <Select
              value={paymentMethod}
              onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PAYMENT_METHODS.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 border-t border-border pt-4">
          <p className="mb-2 text-sm font-medium">Add items to bill</p>
          <div className="grid gap-3 md:grid-cols-12">
            <div className="relative md:col-span-5">
              <Label htmlFor="s-item">Item</Label>
              <Input
                id="s-item"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Type to search"
                autoComplete="off"
              />
              {suggestions.length > 0 && (
                <ul className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border border-border bg-popover shadow-md">
                  {suggestions.map((s) => (
                    <li key={s.code + s.name}>
                      <button
                        type="button"
                        className="w-full px-3 py-2 text-left text-sm hover:bg-accent"
                        onClick={() => pick(s.name)}
                      >
                        {s.name}
                        <span className="ml-2 text-xs text-muted-foreground">
                          {s.category} · {s.brand} · {s.model} · stock {s.qty}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="s-qty">Qty</Label>
              <Input
                id="s-qty"
                type="number"
                value={itemQty}
                onChange={(e) => setItemQty(Number(e.target.value))}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="s-rate">Rate</Label>
              <Input
                id="s-rate"
                type="number"
                value={itemRate}
                onChange={(e) => setItemRate(Number(e.target.value))}
              />
            </div>
            <div className="flex items-end md:col-span-3">
              <Button onClick={addToBill} className="w-full">
                <Plus className="mr-1 size-4" /> Add to bill
              </Button>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-3 text-xs text-muted-foreground md:w-3/4">
            <div>
              Category: <strong>{matched?.category || "-"}</strong>
            </div>
            <div>
              Sub Category: <strong>{matched?.subCategory || "-"}</strong>
            </div>
            <div>
              Brand: <strong>{matched?.brand || "-"}</strong>
            </div>
            <div>
              Model: <strong>{matched?.model || "-"}</strong>
            </div>
          </div>
        </div>

        {billItems.length > 0 && (
          <div className="mt-4 border-t border-border pt-4">
            <p className="mb-2 text-sm font-medium">Bill items ({billItems.length})</p>
            <div className="max-h-[30vh] overflow-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-secondary text-secondary-foreground">
                  <tr className="text-left">
                    <th className="p-2">#</th>
                    <th className="p-2">Item</th>
                    <th className="p-2">Sub Category</th>
                    <th className="p-2 text-right">Qty</th>
                    <th className="p-2 text-right">Rate</th>
                    <th className="p-2 text-right">Amount</th>
                    <th className="p-2 text-right">VAT</th>
                    <th className="p-2 text-right">Total</th>
                    <th className="p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {billItems.map((item, idx) => (
                    <tr key={idx} className="border-t border-border">
                      <td className="p-2">{idx + 1}</td>
                      <td className="p-2">
                        {item.itemName}
                        <span className="ml-1 text-xs text-muted-foreground">
                          {item.subCategory} · {item.brand} · {item.model}
                        </span>
                      </td>
                      <td className="p-2">{item.subCategory}</td>
                      <td className="p-2 text-right">{item.qty}</td>
                      <td className="p-2 text-right">{money(item.rate)}</td>
                      <td className="p-2 text-right">{money(item.amount)}</td>
                      <td className="p-2 text-right">{money(item.vat)}</td>
                      <td className="p-2 text-right font-medium">{money(item.total)}</td>
                      <td className="p-2 text-right">
                        <Button size="icon" variant="ghost" onClick={() => removeBillItem(idx)}>
                          <Trash2 className="size-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-3">
              <div className="flex gap-6 text-sm">
                <span>
                  Subtotal <strong>{money(billSubtotal)}</strong>
                </span>
                <span>
                  VAT 13% <strong>{money(billVat)}</strong>
                </span>
                <span className="text-base">
                  Total <strong>{money(billTotal)}</strong>
                </span>
              </div>
              <div className="flex gap-2">
                <Button onClick={saveBill} disabled={saving}>
                  {saving ? "Saving..." : "Save Bill"}
                </Button>
                <Button variant="outline" onClick={onExport}>
                  <Download className="mr-1 size-4" /> Export Excel
                </Button>
              </div>
            </div>
          </div>
        )}

        {billItems.length === 0 && (
          <div className="mt-4 flex justify-end border-t border-border pt-4">
            <Button variant="outline" onClick={onExport}>
              <Download className="mr-1 size-4" /> Export Excel
            </Button>
          </div>
        )}
      </Card>

      <Card className="overflow-hidden p-0">
        <div className="max-h-[50vh] overflow-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-secondary text-secondary-foreground">
              <tr className="text-left">
                <th className="p-2">Date</th>
                <th className="p-2">Invoice</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Payment</th>
                <th className="p-2">Items</th>
                <th className="p-2 text-right">Total</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {groupedSales.map((g) => (
                <tr key={g.header.invoiceNo} className="border-t border-border">
                  <td className="p-2">{g.header.date}</td>
                  <td className="p-2 font-mono">{g.header.invoiceNo}</td>
                  <td className="p-2">{g.header.customer}</td>
                  <td className="p-2">
                    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium">
                      {g.header.paymentMethod}
                    </span>
                  </td>
                  <td className="p-2">
                    {g.items.length} item{g.items.length > 1 ? "s" : ""}
                    <span className="ml-1 text-xs text-muted-foreground">
                      ({g.items.reduce((a, i) => a + i.qty, 0)} pcs)
                    </span>
                  </td>
                  <td className="p-2 text-right font-medium">
                    {money(g.items.reduce((a, i) => a + i.total, 0))}
                  </td>
                  <td className="p-2 text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => deleteInvoice(g.header.invoiceNo)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {groupedSales.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-muted-foreground">
                    No sales recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <p className="text-right text-sm text-muted-foreground">
        Grand total sales: <strong className="text-foreground">{money(grand)}</strong>
      </p>
    </div>
  );
}
