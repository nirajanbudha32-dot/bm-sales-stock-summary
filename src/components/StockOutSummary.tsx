import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useStore } from "@/lib/store";
import { exportRows } from "@/lib/excel";

const money = (n: number) =>
  n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function StockOutSummary() {
  const { sales } = useStore();

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    let result = sales;
    if (dateFrom) result = result.filter((s) => s.date >= dateFrom);
    if (dateTo) result = result.filter((s) => s.date <= dateTo);
    const t = q.trim().toLowerCase();
    if (t) {
      result = result.filter(
        (s) =>
          s.itemName.toLowerCase().includes(t) ||
          s.itemCode.toLowerCase().includes(t) ||
          s.invoiceNo.toLowerCase().includes(t) ||
          s.customer.toLowerCase().includes(t) ||
          s.subCategory.toLowerCase().includes(t),
      );
    }
    return result;
  }, [sales, dateFrom, dateTo, q]);

  const totalQty = filtered.reduce((a, s) => a + s.qty, 0);
  const totalAmount = filtered.reduce((a, s) => a + s.amount, 0);
  const totalVat = filtered.reduce((a, s) => a + s.vat, 0);
  const totalTotal = filtered.reduce((a, s) => a + s.total, 0);

  function onExport() {
    if (filtered.length === 0) {
      toast.error("No data to export");
      return;
    }
    exportRows(
      filtered.map((s) => ({
        Date: s.date,
        "Store Name": "BM iPhone Store",
        "Item Code": s.itemCode,
        "Item Name": s.itemName,
        "Sub Category": s.subCategory,
        "Qty Out": s.qty,
        "Unit Price": s.rate,
        Customer: s.customer,
        "Invoice No": s.invoiceNo,
      })),
      "Stock Out",
      `BM_StockOut_${new Date().toISOString().slice(0, 10)}.xlsx`,
    );
  }

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="grid gap-3 md:grid-cols-4">
          <div>
            <Label htmlFor="so-from">Date from</Label>
            <Input
              id="so-from"
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="so-to">Date to</Label>
            <Input
              id="so-to"
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="so-search">Search</Label>
            <Input
              id="so-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Item, code, invoice, customer"
            />
          </div>
          <div className="flex items-end">
            <Button variant="outline" onClick={onExport} className="w-full">
              <Download className="mr-1 size-4" /> Export Excel
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <span>
          {filtered.length} item{filtered.length !== 1 ? "s" : ""}
        </span>
        <span>{totalQty} units out</span>
        <span>
          Total: <strong className="text-foreground">{money(totalTotal)}</strong>
        </span>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="max-h-[60vh] overflow-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-secondary text-secondary-foreground">
              <tr className="text-left">
                <th className="p-2">Date</th>
                <th className="p-2">Store Name</th>
                <th className="p-2">Item Code</th>
                <th className="p-2">Item Name</th>
                <th className="p-2">Sub Category</th>
                <th className="p-2 text-right">Qty Out</th>
                <th className="p-2 text-right">Unit Price</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Invoice No</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id} className="border-t border-border">
                  <td className="p-2">{s.date}</td>
                  <td className="p-2">BM iPhone Store</td>
                  <td className="p-2 font-mono">{s.itemCode}</td>
                  <td className="p-2">{s.itemName}</td>
                  <td className="p-2">{s.subCategory}</td>
                  <td className="p-2 text-right">{s.qty}</td>
                  <td className="p-2 text-right">{money(s.rate)}</td>
                  <td className="p-2">{s.customer}</td>
                  <td className="p-2 font-mono">{s.invoiceNo}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-muted-foreground">
                    No stock out records found.
                  </td>
                </tr>
              )}
            </tbody>
            {filtered.length > 0 && (
              <tfoot className="sticky bottom-0 bg-muted">
                <tr className="border-t border-border font-semibold">
                  <td className="p-2" colSpan={5}>
                    Total
                  </td>
                  <td className="p-2 text-right">{totalQty}</td>
                  <td className="p-2 text-right">{money(totalAmount)}</td>
                  <td className="p-2" colSpan={2}></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </Card>
    </div>
  );
}
