import { useMemo, useState } from "react";
import { Download, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { deleteStock, nextItemCode, upsertStock, useStore, type StockItem } from "@/lib/store";
import { exportRows } from "@/lib/excel";

const empty: StockItem = {
  code: "",
  name: "",
  category: "",
  subCategory: "",
  brand: "",
  subBrand: "",
  model: "",
  unit: "PCS",
  qty: 0,
  purchasePrice: 0,
  sellingPrice: 0,
};

export function StockManager({ role = "admin" }: { role?: "admin" | "salesman" }) {
  const { stock } = useStore();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<StockItem>(empty);
  const [editingCode, setEditingCode] = useState<string | undefined>();

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return stock;
    return stock.filter((i) =>
      [i.name, i.brand, i.model, i.category, i.subCategory, i.code]
        .join(" ")
        .toLowerCase()
        .includes(t),
    );
  }, [stock, q]);

  const totalQty = filtered.reduce((s, i) => s + i.qty, 0);

  async function startAdd() {
    const code = await nextItemCode();
    setDraft({ ...empty, code });
    setEditingCode(undefined);
    setOpen(true);
  }

  function startEdit(item: StockItem) {
    setDraft(item);
    setEditingCode(item.code);
    setOpen(true);
  }

  async function save() {
    if (!draft.name.trim()) {
      toast.error("Item name is required");
      return;
    }
    await upsertStock(draft, editingCode);
    setOpen(false);
    toast.success(editingCode ? "Item updated" : "Item added");
  }

  function onExport() {
    exportRows(
      filtered.map((i) => ({
        "Item Code": i.code,
        "Item Name": i.name,
        Category: i.category,
        "Sub-Category": i.subCategory,
        Brand: i.brand,
        Model: i.model,
        Unit: i.unit,
        Qty: i.qty,
        "Purchase Price": i.purchasePrice,
        "Selling Price": i.sellingPrice,
      })),
      "Stock",
      `BM_Stock_${new Date().toISOString().slice(0, 10)}.xlsx`,
    );
  }

  const isAdmin = role === "admin";

  return (
    <div className="space-y-4">
      {!isAdmin && (
        <div className="min-w-56">
          <Label htmlFor="stock-search">Search stock</Label>
          <Input
            id="stock-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Item, brand, model, category"
          />
        </div>
      )}
      {isAdmin && (
        <div className="flex flex-wrap items-end gap-3">
          <div className="min-w-56 flex-1">
            <Label htmlFor="stock-search">Search stock</Label>
            <Input
              id="stock-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Item, brand, model, category"
            />
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={startAdd}>
                <Plus className="mr-1 size-4" /> Add item
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>{editingCode ? "Edit item" : "Add item"}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    ["code", "Item code"],
                    ["name", "Item name"],
                    ["category", "Category"],
                    ["subCategory", "Sub-category"],
                    ["brand", "Brand"],
                    ["subBrand", "Sub-brand"],
                    ["model", "Model"],
                    ["unit", "Unit"],
                  ] as const
                ).map(([key, label]) => (
                  <div key={key} className={key === "name" ? "col-span-2" : ""}>
                    <Label htmlFor={`f-${key}`}>{label}</Label>
                    <Input
                      id={`f-${key}`}
                      value={draft[key]}
                      onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                    />
                  </div>
                ))}
                {(
                  [
                    ["qty", "Quantity"],
                    ["purchasePrice", "Purchase price"],
                    ["sellingPrice", "Selling price"],
                  ] as const
                ).map(([key, label]) => (
                  <div key={key}>
                    <Label htmlFor={`f-${key}`}>{label}</Label>
                    <Input
                      id={`f-${key}`}
                      type="number"
                      value={draft[key]}
                      onChange={(e) => setDraft({ ...draft, [key]: Number(e.target.value) })}
                    />
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button onClick={save}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={onExport}>
            <Download className="mr-1 size-4" /> Export Excel
          </Button>
        </div>
      )}

      <div className="flex gap-6 text-sm text-muted-foreground">
        <span>{filtered.length} items</span>
        <span>{totalQty} units in stock</span>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="max-h-[60vh] overflow-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-secondary text-secondary-foreground">
              <tr className="text-left">
                <th className="p-2">Code</th>
                <th className="p-2">Item</th>
                <th className="p-2">Category</th>
                <th className="p-2">Sub Category</th>
                <th className="p-2">Brand</th>
                <th className="p-2">Model</th>
                <th className="p-2 text-right">Qty</th>
                <th className="p-2 text-right">Purchase</th>
                <th className="p-2 text-right">Selling</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((i) => (
                <tr key={i.code + i.name} className="border-t border-border">
                  <td className="p-2">{i.code}</td>
                  <td className="p-2 font-medium">{i.name}</td>
                  <td className="p-2">{i.category}</td>
                  <td className="p-2">{i.subCategory}</td>
                  <td className="p-2">{i.brand}</td>
                  <td className="p-2">{i.model}</td>
                  <td className={`p-2 text-right ${i.qty <= 0 ? "text-destructive" : ""}`}>
                    {i.qty}
                  </td>
                  <td className="p-2 text-right">{i.purchasePrice || "-"}</td>
                  <td className="p-2 text-right">{i.sellingPrice || "-"}</td>
                  <td className="p-2">
                    {isAdmin && (
                      <div className="flex justify-end gap-1">
                        <Button size="icon" variant="ghost" onClick={() => startEdit(i)}>
                          <Pencil className="size-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={async () => {
                            await deleteStock(i.code);
                            toast.success("Item deleted");
                          }}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-muted-foreground">
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
