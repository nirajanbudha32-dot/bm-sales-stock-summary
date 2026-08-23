import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as supabase, r as useAuth } from "./auth-CxCyqzZL.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { c as Label, l as cn, n as Card, s as Input, t as Button } from "./card-C1QcGORC.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChartColumn, a as Trash2, c as ReceiptText, d as LogOut, g as Check, h as ChevronDown, i as Truck, l as Plus, m as ChevronUp, n as Users, o as Shield, p as Download, r as UserPlus, s as ShieldOff, t as X, u as Pencil, v as Boxes } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { n as writeFileSync, t as utils } from "../_libs/xlsx.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CK9UC_0Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var PAYMENT_METHODS = [
	"Cash",
	"Bank",
	"Khalti",
	"eSewa",
	"Other Bank"
];
var VAT_RATE = .13;
var listeners = /* @__PURE__ */ new Set();
var state = {
	stock: [],
	sales: []
};
var loaded = false;
function emit() {
	listeners.forEach((l) => l());
}
function mapStockRow(r) {
	return {
		code: r.code,
		name: r.name,
		category: r.category,
		subCategory: r.sub_category,
		brand: r.brand,
		subBrand: r.sub_brand,
		model: r.model,
		unit: r.unit,
		qty: r.qty,
		purchasePrice: r.purchase_price,
		sellingPrice: r.selling_price
	};
}
function mapSaleRow(r) {
	return {
		id: r.id,
		invoiceNo: r.invoice_no,
		date: r.date,
		customer: r.customer,
		itemName: r.item_name,
		itemCode: r.item_code,
		category: r.category,
		subCategory: r.sub_category,
		brand: r.brand,
		model: r.model,
		qty: r.qty,
		rate: r.rate,
		amount: r.amount,
		vat: r.vat,
		total: r.total,
		paymentMethod: r.payment_method
	};
}
function useStore() {
	const [snapshot, setSnapshot] = (0, import_react.useState)(state);
	const load = (0, import_react.useCallback)(async () => {
		const [stockRes, salesRes] = await Promise.all([supabase.from("stock").select("*").order("name"), supabase.from("sales").select("*").order("created_at", { ascending: false })]);
		state = {
			stock: (stockRes.data ?? []).map(mapStockRow),
			sales: (salesRes.data ?? []).map(mapSaleRow)
		};
		loaded = true;
		emit();
	}, []);
	(0, import_react.useEffect)(() => {
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
function nextInvoiceNo(sales) {
	const max = sales.reduce((acc, s) => {
		const n = Number(s.invoiceNo.replace(/\D/g, ""));
		return Number.isFinite(n) && n > acc ? n : acc;
	}, 0);
	return `BM_INV${String(max + 1).padStart(4, "0")}`;
}
async function addBill(invoiceNo, date, customer, paymentMethod, items) {
	const { data: { user } } = await supabase.auth.getUser();
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
		created_by: user?.id ?? null
	}));
	const { error } = await supabase.from("sales").insert(rows);
	if (!error) {
		for (const item of items) await supabase.rpc("decrement_stock", {
			item_name: item.itemName,
			qty_sold: item.qty
		});
		await reload();
	}
	return { error };
}
async function deleteInvoice(invoiceNo) {
	const items = state.sales.filter((s) => s.invoiceNo === invoiceNo);
	if (items.length > 0) {
		await supabase.from("sales").delete().eq("invoice_no", invoiceNo);
		for (const item of items) await supabase.rpc("increment_stock", {
			item_name: item.itemName,
			qty_returned: item.qty
		});
		await reload();
	}
}
async function upsertStock(item, originalCode) {
	const key = originalCode ?? item.code;
	const { data: existing } = await supabase.from("stock").select("code").eq("code", key).single();
	if (existing) await supabase.from("stock").update({
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
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}).eq("code", key);
	else await supabase.from("stock").insert({
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
		selling_price: item.sellingPrice
	});
	await reload();
}
async function deleteStock(code) {
	await supabase.from("stock").delete().eq("code", code);
	await reload();
}
async function nextItemCode() {
	const { data } = await supabase.from("stock").select("code").order("code", { ascending: false }).limit(1);
	if (!data || data.length === 0) return "1";
	const n = Number(String(data[0].code).replace(/\D/g, ""));
	return String((Number.isFinite(n) ? n : 0) + 1);
}
async function reload() {
	const [stockRes, salesRes] = await Promise.all([supabase.from("stock").select("*").order("name"), supabase.from("sales").select("*").order("created_at", { ascending: false })]);
	state = {
		stock: (stockRes.data ?? []).map(mapStockRow),
		sales: (salesRes.data ?? []).map(mapSaleRow)
	};
	emit();
}
function exportRows(rows, sheetName, fileName) {
	const ws = utils.json_to_sheet(rows);
	const wb = utils.book_new();
	utils.book_append_sheet(wb, ws, sheetName);
	writeFileSync(wb, fileName);
}
var empty = {
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
	sellingPrice: 0
};
function StockManager({ role = "admin" }) {
	const { stock } = useStore();
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(empty);
	const [editingCode, setEditingCode] = (0, import_react.useState)();
	const filtered = (0, import_react.useMemo)(() => {
		const t = q.trim().toLowerCase();
		if (!t) return stock;
		return stock.filter((i) => [
			i.name,
			i.brand,
			i.model,
			i.category,
			i.subCategory,
			i.code
		].join(" ").toLowerCase().includes(t));
	}, [stock, q]);
	const totalQty = filtered.reduce((s, i) => s + i.qty, 0);
	async function startAdd() {
		const code = await nextItemCode();
		setDraft({
			...empty,
			code
		});
		setEditingCode(void 0);
		setOpen(true);
	}
	function startEdit(item) {
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
		exportRows(filtered.map((i) => ({
			"Item Code": i.code,
			"Item Name": i.name,
			Category: i.category,
			"Sub-Category": i.subCategory,
			Brand: i.brand,
			Model: i.model,
			Unit: i.unit,
			Qty: i.qty,
			"Purchase Price": i.purchasePrice,
			"Selling Price": i.sellingPrice
		})), "Stock", `BM_Stock_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
	}
	const isAdmin = role === "admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-56",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "stock-search",
					children: "Search stock"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "stock-search",
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Item, brand, model, category"
				})]
			}),
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-56 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "stock-search",
							children: "Search stock"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "stock-search",
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Item, brand, model, category"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: startAdd,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 size-4" }), " Add item"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "max-h-[85vh] overflow-y-auto sm:max-w-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingCode ? "Edit item" : "Add item" }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [[
										["code", "Item code"],
										["name", "Item name"],
										["category", "Category"],
										["subCategory", "Sub-category"],
										["brand", "Brand"],
										["subBrand", "Sub-brand"],
										["model", "Model"],
										["unit", "Unit"]
									].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: key === "name" ? "col-span-2" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: `f-${key}`,
											children: label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `f-${key}`,
											value: draft[key],
											onChange: (e) => setDraft({
												...draft,
												[key]: e.target.value
											})
										})]
									}, key)), [
										["qty", "Quantity"],
										["purchasePrice", "Purchase price"],
										["sellingPrice", "Selling price"]
									].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: `f-${key}`,
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: `f-${key}`,
										type: "number",
										value: draft[key],
										onChange: (e) => setDraft({
											...draft,
											[key]: Number(e.target.value)
										})
									})] }, key))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: save,
									children: "Save"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: onExport,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-4" }), " Export Excel"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [filtered.length, " items"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [totalQty, " units in stock"] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[60vh] overflow-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "sticky top-0 bg-secondary text-secondary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Code"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Item"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Category"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Sub Category"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Brand"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Model"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2 text-right",
										children: "Qty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2 text-right",
										children: "Purchase"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2 text-right",
										children: "Selling"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "p-2" })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filtered.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: i.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 font-medium",
									children: i.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: i.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: i.subCategory
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: i.brand
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: i.model
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: `p-2 text-right ${i.qty <= 0 ? "text-destructive" : ""}`,
									children: i.qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right",
									children: i.purchasePrice || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right",
									children: i.sellingPrice || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-end gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "ghost",
											onClick: () => startEdit(i),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "ghost",
											onClick: async () => {
												await deleteStock(i.code);
												toast.success("Item deleted");
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
										})]
									})
								})
							]
						}, i.code + i.name)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 9,
							className: "p-6 text-center text-muted-foreground",
							children: "No items found."
						}) })] })]
					})
				})
			})
		]
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var money$2 = (n) => n.toLocaleString(void 0, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});
function SalesRegister() {
	const { stock, sales } = useStore();
	const invoiceNo = nextInvoiceNo(sales);
	const [date, setDate] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [customer, setCustomer] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("Cash");
	const [itemName, setItemName] = (0, import_react.useState)("");
	const [itemQty, setItemQty] = (0, import_react.useState)(1);
	const [itemRate, setItemRate] = (0, import_react.useState)(0);
	const [billItems, setBillItems] = (0, import_react.useState)([]);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const suggestions = (0, import_react.useMemo)(() => {
		const t = itemName.trim().toLowerCase();
		if (!t) return [];
		if (stock.some((i) => i.name.toLowerCase() === t)) return [];
		return stock.filter((i) => i.name.toLowerCase().includes(t)).slice(0, 8);
	}, [stock, itemName]);
	const matched = (0, import_react.useMemo)(() => stock.find((i) => i.name.toLowerCase() === itemName.trim().toLowerCase()), [stock, itemName]);
	const billSubtotal = billItems.reduce((a, i) => a + i.amount, 0);
	const billVat = billItems.reduce((a, i) => a + i.vat, 0);
	const billTotal = billItems.reduce((a, i) => a + i.total, 0);
	function pick(name) {
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
		const newItem = {
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
			total: amount + vat
		};
		setBillItems((prev) => [...prev, newItem]);
		setItemName("");
		setItemQty(1);
		setItemRate(0);
	}
	function removeBillItem(index) {
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
		exportRows(sales.map((s) => ({
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
			"Payment Method": s.paymentMethod
		})), "Sales", `BM_Sales_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
	}
	const groupedSales = (0, import_react.useMemo)(() => {
		const groups = /* @__PURE__ */ new Map();
		for (const s of sales) {
			const existing = groups.get(s.invoiceNo);
			if (existing) existing.items.push(s);
			else groups.set(s.invoiceNo, {
				header: s,
				items: [s]
			});
		}
		return [...groups.values()];
	}, [sales]);
	const grand = sales.reduce((a, s) => a + s.total, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "s-date",
								children: "Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "s-date",
								type: "date",
								value: date,
								onChange: (e) => setDate(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "s-inv",
								children: "Invoice no (auto)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "s-inv",
								value: invoiceNo,
								readOnly: true,
								className: "bg-muted font-mono"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "s-cust",
								children: "Customer name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "s-cust",
								value: customer,
								onChange: (e) => setCustomer(e.target.value),
								placeholder: "Customer"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Payment Method" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: paymentMethod,
								onValueChange: (v) => setPaymentMethod(v),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PAYMENT_METHODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: m,
									children: m
								}, m)) })]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 border-t border-border pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-sm font-medium",
								children: "Add items to bill"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 md:grid-cols-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative md:col-span-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "s-item",
												children: "Item"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "s-item",
												value: itemName,
												onChange: (e) => setItemName(e.target.value),
												placeholder: "Type to search",
												autoComplete: "off"
											}),
											suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border border-border bg-popover shadow-md",
												children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													className: "w-full px-3 py-2 text-left text-sm hover:bg-accent",
													onClick: () => pick(s.name),
													children: [s.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "ml-2 text-xs text-muted-foreground",
														children: [
															s.category,
															" · ",
															s.brand,
															" · ",
															s.model,
															" · stock ",
															s.qty
														]
													})]
												}) }, s.code + s.name))
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "md:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "s-qty",
											children: "Qty"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "s-qty",
											type: "number",
											value: itemQty,
											onChange: (e) => setItemQty(Number(e.target.value))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "md:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "s-rate",
											children: "Rate"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "s-rate",
											type: "number",
											value: itemRate,
											onChange: (e) => setItemRate(Number(e.target.value))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-end md:col-span-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: addToBill,
											className: "w-full",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 size-4" }), " Add to bill"]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 grid grid-cols-4 gap-3 text-xs text-muted-foreground md:w-3/4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Category: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: matched?.category || "-" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Sub Category: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: matched?.subCategory || "-" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Brand: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: matched?.brand || "-" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Model: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: matched?.model || "-" })] })
								]
							})
						]
					}),
					billItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 border-t border-border pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-2 text-sm font-medium",
								children: [
									"Bill items (",
									billItems.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-h-[30vh] overflow-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "sticky top-0 bg-secondary text-secondary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "text-left",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2",
													children: "#"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2",
													children: "Item"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2",
													children: "Sub Category"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 text-right",
													children: "Qty"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 text-right",
													children: "Rate"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 text-right",
													children: "Amount"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 text-right",
													children: "VAT"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 text-right",
													children: "Total"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "p-2" })
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: billItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-2",
												children: idx + 1
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-2",
												children: [item.itemName, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "ml-1 text-xs text-muted-foreground",
													children: [
														item.subCategory,
														" · ",
														item.brand,
														" · ",
														item.model
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-2",
												children: item.subCategory
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-2 text-right",
												children: item.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-2 text-right",
												children: money$2(item.rate)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-2 text-right",
												children: money$2(item.amount)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-2 text-right",
												children: money$2(item.vat)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-2 text-right font-medium",
												children: money$2(item.total)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-2 text-right",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "icon",
													variant: "ghost",
													onClick: () => removeBillItem(idx),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
												})
											})
										]
									}, idx)) })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-6 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Subtotal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money$2(billSubtotal) })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["VAT 13% ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money$2(billVat) })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-base",
											children: ["Total ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money$2(billTotal) })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										onClick: saveBill,
										disabled: saving,
										children: saving ? "Saving..." : "Save Bill"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										onClick: onExport,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-4" }), " Export Excel"]
									})]
								})]
							})
						]
					}),
					billItems.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex justify-end border-t border-border pt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: onExport,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-4" }), " Export Excel"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[50vh] overflow-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "sticky top-0 bg-secondary text-secondary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Invoice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Customer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Payment"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2",
										children: "Items"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-2 text-right",
										children: "Total"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "p-2" })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [groupedSales.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: g.header.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 font-mono",
									children: g.header.invoiceNo
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: g.header.customer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium",
										children: g.header.paymentMethod
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "p-2",
									children: [
										g.items.length,
										" item",
										g.items.length > 1 ? "s" : "",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "ml-1 text-xs text-muted-foreground",
											children: [
												"(",
												g.items.reduce((a, i) => a + i.qty, 0),
												" pcs)"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right font-medium",
									children: money$2(g.items.reduce((a, i) => a + i.total, 0))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										onClick: () => deleteInvoice(g.header.invoiceNo),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})
								})
							]
						}, g.header.invoiceNo)), groupedSales.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 7,
							className: "p-6 text-center text-muted-foreground",
							children: "No sales recorded yet."
						}) })] })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-right text-sm text-muted-foreground",
				children: ["Grand total sales: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: money$2(grand)
				})]
			})
		]
	});
}
var money$1 = (n) => n.toLocaleString(void 0, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});
function groupBy(stock, pick) {
	const map = /* @__PURE__ */ new Map();
	for (const i of stock) {
		const key = (pick(i) || "—").trim() || "—";
		const g = map.get(key) ?? {
			key,
			items: 0,
			qty: 0,
			purchaseValue: 0,
			sellingValue: 0
		};
		g.items += 1;
		g.qty += i.qty;
		g.purchaseValue += i.qty * i.purchasePrice;
		g.sellingValue += i.qty * i.sellingPrice;
		map.set(key, g);
	}
	return [...map.values()].sort((a, b) => b.qty - a.qty);
}
function GroupTable({ label, groups }) {
	const t = groups.reduce((a, g) => ({
		items: a.items + g.items,
		qty: a.qty + g.qty,
		purchaseValue: a.purchaseValue + g.purchaseValue,
		sellingValue: a.sellingValue + g.sellingValue
	}), {
		items: 0,
		qty: 0,
		purchaseValue: 0,
		sellingValue: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "overflow-hidden p-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-[55vh] overflow-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 bg-secondary text-secondary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-2",
									children: label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-2 text-right",
									children: "Items"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-2 text-right",
									children: "Qty"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-2 text-right",
									children: "Purchase value"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-2 text-right",
									children: "Selling value"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 font-medium",
								children: g.key
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 text-right",
								children: g.items
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `p-2 text-right ${g.qty <= 0 ? "text-destructive" : ""}`,
								children: g.qty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 text-right",
								children: money$1(g.purchaseValue)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 text-right",
								children: money$1(g.sellingValue)
							})
						]
					}, g.key)), groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 5,
						className: "p-6 text-center text-muted-foreground",
						children: "No stock data."
					}) })] }),
					groups.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
						className: "sticky bottom-0 bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: "Total"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right",
									children: t.items
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right",
									children: t.qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right",
									children: money$1(t.purchaseValue)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right",
									children: money$1(t.sellingValue)
								})
							]
						})
					})
				]
			})
		})
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wide text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xl font-semibold",
				children: value
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: hint
			})
		]
	});
}
function StockSummary() {
	const { stock, sales } = useStore();
	const [today] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const byCategory = (0, import_react.useMemo)(() => groupBy(stock, (i) => i.category), [stock]);
	const byBrand = (0, import_react.useMemo)(() => groupBy(stock, (i) => i.brand), [stock]);
	const bySubBrand = (0, import_react.useMemo)(() => groupBy(stock, (i) => i.subBrand), [stock]);
	const todaySales = (0, import_react.useMemo)(() => sales.filter((s) => s.date === today), [sales, today]);
	const todayQty = todaySales.reduce((a, s) => a + s.qty, 0);
	const todayAmount = todaySales.reduce((a, s) => a + s.amount, 0);
	const todayVat = todaySales.reduce((a, s) => a + s.vat, 0);
	const todayTotal = todaySales.reduce((a, s) => a + s.total, 0);
	const totalQty = stock.reduce((a, i) => a + i.qty, 0);
	const totalPurchase = stock.reduce((a, i) => a + i.qty * i.purchasePrice, 0);
	const totalSelling = stock.reduce((a, i) => a + i.qty * i.sellingPrice, 0);
	const outOfStock = stock.filter((i) => i.qty <= 0).length;
	function onExport() {
		const rows = [
			...byCategory.map((g) => ({
				Group: "Category",
				Name: g.key,
				Items: g.items,
				Qty: g.qty,
				"Purchase Value": g.purchaseValue,
				"Selling Value": g.sellingValue
			})),
			...byBrand.map((g) => ({
				Group: "Brand",
				Name: g.key,
				Items: g.items,
				Qty: g.qty,
				"Purchase Value": g.purchaseValue,
				"Selling Value": g.sellingValue
			})),
			...bySubBrand.map((g) => ({
				Group: "Sub-Brand",
				Name: g.key,
				Items: g.items,
				Qty: g.qty,
				"Purchase Value": g.purchaseValue,
				"Selling Value": g.sellingValue
			}))
		];
		if (rows.length === 0) {
			toast.error("Nothing to export");
			return;
		}
		exportRows(rows, "Summary", `BM_Stock_Summary_${today}.xlsx`);
	}
	function onExportToday() {
		if (todaySales.length === 0) {
			toast.error("No sales today");
			return;
		}
		exportRows(todaySales.map((s) => ({
			Date: s.date,
			"Invoice No": s.invoiceNo,
			Customer: s.customer,
			Item: s.itemName,
			Category: s.category,
			Brand: s.brand,
			Model: s.model,
			Qty: s.qty,
			Rate: s.rate,
			Amount: s.amount,
			"VAT 13%": s.vat,
			Total: s.total
		})), "Today", `BM_Today_Sales_${today}.xlsx`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Today sales",
						value: money$1(todayTotal),
						hint: `${todaySales.length} invoices · VAT ${money$1(todayVat)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Today stock out",
						value: `${todayQty} units`,
						hint: `Net amount ${money$1(todayAmount)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Stock on hand",
						value: `${totalQty} units`,
						hint: `${stock.length} items · ${outOfStock} out of stock`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Stock value",
						value: money$1(totalSelling),
						hint: `Purchase ${money$1(totalPurchase)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: onExport,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-4" }), " Export summary"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: onExportToday,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-4" }), " Export today sales"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "category",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "mb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "category",
								children: "By category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "brand",
								children: "By brand"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "subbrand",
								children: "By sub-brand"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "today",
								children: "Today"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "category",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupTable, {
							label: "Category",
							groups: byCategory
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupTable, {
							label: "Brand",
							groups: byBrand
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "subbrand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupTable, {
							label: "Sub-brand",
							groups: bySubBrand
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "today",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "overflow-hidden p-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-h-[55vh] overflow-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "sticky top-0 bg-secondary text-secondary-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "text-left",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-2",
														children: "Invoice"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-2",
														children: "Customer"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-2",
														children: "Item"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-2 text-right",
														children: "Qty"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-2 text-right",
														children: "Amount"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-2 text-right",
														children: "VAT 13%"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-2 text-right",
														children: "Total"
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [todaySales.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-t border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 font-mono",
													children: s.invoiceNo
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2",
													children: s.customer
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2",
													children: s.itemName
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 text-right",
													children: s.qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 text-right",
													children: money$1(s.amount)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 text-right",
													children: money$1(s.vat)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 text-right font-medium",
													children: money$1(s.total)
												})
											]
										}, s.id)), todaySales.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											colSpan: 7,
											className: "p-6 text-center text-muted-foreground",
											children: "No sales recorded today."
										}) })] }),
										todaySales.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
											className: "sticky bottom-0 bg-muted",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "border-t border-border font-semibold",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-2",
														colSpan: 3,
														children: "Total"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-2 text-right",
														children: todayQty
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-2 text-right",
														children: money$1(todayAmount)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-2 text-right",
														children: money$1(todayVat)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-2 text-right",
														children: money$1(todayTotal)
													})
												]
											})
										})
									]
								})
							})
						})
					})
				]
			})
		]
	});
}
var money = (n) => n.toLocaleString(void 0, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});
function StockOutSummary() {
	const { sales } = useStore();
	const [dateFrom, setDateFrom] = (0, import_react.useState)("");
	const [dateTo, setDateTo] = (0, import_react.useState)("");
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => {
		let result = sales;
		if (dateFrom) result = result.filter((s) => s.date >= dateFrom);
		if (dateTo) result = result.filter((s) => s.date <= dateTo);
		const t = q.trim().toLowerCase();
		if (t) result = result.filter((s) => s.itemName.toLowerCase().includes(t) || s.itemCode.toLowerCase().includes(t) || s.invoiceNo.toLowerCase().includes(t) || s.customer.toLowerCase().includes(t) || s.subCategory.toLowerCase().includes(t));
		return result;
	}, [
		sales,
		dateFrom,
		dateTo,
		q
	]);
	const totalQty = filtered.reduce((a, s) => a + s.qty, 0);
	const totalAmount = filtered.reduce((a, s) => a + s.amount, 0);
	filtered.reduce((a, s) => a + s.vat, 0);
	const totalTotal = filtered.reduce((a, s) => a + s.total, 0);
	function onExport() {
		if (filtered.length === 0) {
			toast.error("No data to export");
			return;
		}
		exportRows(filtered.map((s) => ({
			Date: s.date,
			"Store Name": "BM iPhone Store",
			"Item Code": s.itemCode,
			"Item Name": s.itemName,
			"Sub Category": s.subCategory,
			"Qty Out": s.qty,
			"Unit Price": s.rate,
			Customer: s.customer,
			"Invoice No": s.invoiceNo
		})), "Stock Out", `BM_StockOut_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "so-from",
							children: "Date from"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "so-from",
							type: "date",
							value: dateFrom,
							onChange: (e) => setDateFrom(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "so-to",
							children: "Date to"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "so-to",
							type: "date",
							value: dateTo,
							onChange: (e) => setDateTo(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "so-search",
							children: "Search"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "so-search",
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Item, code, invoice, customer"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: onExport,
								className: "w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-4" }), " Export Excel"]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-6 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						filtered.length,
						" item",
						filtered.length !== 1 ? "s" : ""
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [totalQty, " units out"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Total: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: money(totalTotal)
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[60vh] overflow-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "sticky top-0 bg-secondary text-secondary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2",
											children: "Date"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2",
											children: "Store Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2",
											children: "Item Code"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2",
											children: "Item Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2",
											children: "Sub Category"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2 text-right",
											children: "Qty Out"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2 text-right",
											children: "Unit Price"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2",
											children: "Customer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-2",
											children: "Invoice No"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2",
										children: s.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2",
										children: "BM iPhone Store"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2 font-mono",
										children: s.itemCode
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2",
										children: s.itemName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2",
										children: s.subCategory
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2 text-right",
										children: s.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2 text-right",
										children: money(s.rate)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2",
										children: s.customer
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2 font-mono",
										children: s.invoiceNo
									})
								]
							}, s.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 9,
								className: "p-6 text-center text-muted-foreground",
								children: "No stock out records found."
							}) })] }),
							filtered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
								className: "sticky bottom-0 bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-2",
											colSpan: 5,
											children: "Total"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-2 text-right",
											children: totalQty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-2 text-right",
											children: money(totalAmount)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-2",
											colSpan: 2
										})
									]
								})
							})
						]
					})
				})
			})
		]
	});
}
function UserManager({ open, onOpenChange }) {
	const { user: currentUser, refreshProfile } = useAuth();
	const [users, setUsers] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [inviteEmail, setInviteEmail] = (0, import_react.useState)("");
	const [invitePassword, setInvitePassword] = (0, import_react.useState)("");
	const [inviteRole, setInviteRole] = (0, import_react.useState)("salesman");
	const [inviting, setInviting] = (0, import_react.useState)(false);
	async function loadUsers() {
		setLoading(true);
		const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: true });
		if (error) toast.error("Failed to load users");
		else setUsers(data);
		setLoading(false);
	}
	(0, import_react.useEffect)(() => {
		if (open) loadUsers();
	}, [open]);
	async function handleInvite(e) {
		e.preventDefault();
		if (!inviteEmail.trim() || !invitePassword.trim()) {
			toast.error("Email and password are required");
			return;
		}
		setInviting(true);
		const { data, error } = await supabase.auth.signUp({
			email: inviteEmail,
			password: invitePassword
		});
		if (error) {
			toast.error(error.message);
			setInviting(false);
			return;
		}
		if (data.user) await supabase.from("profiles").upsert({
			id: data.user.id,
			email: inviteEmail,
			role: inviteRole
		});
		toast.success(`Invited ${inviteEmail} as ${inviteRole}`);
		setInviteEmail("");
		setInvitePassword("");
		setInviteRole("salesman");
		setInviting(false);
		loadUsers();
	}
	async function toggleRole(userId, currentRole) {
		if (userId === currentUser?.id) {
			toast.error("Cannot change your own role");
			return;
		}
		const newRole = currentRole === "admin" ? "salesman" : "admin";
		const { error } = await supabase.from("profiles").update({ role: newRole }).eq("id", userId);
		if (error) toast.error("Failed to update role");
		else {
			toast.success(`Role changed to ${newRole}`);
			loadUsers();
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[85vh] overflow-y-auto sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Manage Users" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleInvite,
					className: "space-y-3 rounded-lg border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Invite new user"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "invite-email",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "invite-email",
										type: "email",
										value: inviteEmail,
										onChange: (e) => setInviteEmail(e.target.value),
										placeholder: "user@example.com",
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "invite-password",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "invite-password",
									type: "password",
									value: invitePassword,
									onChange: (e) => setInvitePassword(e.target.value),
									placeholder: "At least 6 characters",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: inviteRole,
									onValueChange: (v) => setInviteRole(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "salesman",
										children: "Salesman"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "admin",
										children: "Admin"
									})] })]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "sm",
							disabled: inviting,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-1 size-4" }), inviting ? "Inviting..." : "Invite user"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "All users"
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading..."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-md border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: u.email
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: ["Joined ", new Date(u.created_at).toLocaleDateString()]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: u.role === "admin" ? "default" : "secondary",
									children: u.role
								}), u.id !== currentUser?.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									onClick: () => toggleRole(u.id, u.role),
									title: u.role === "admin" ? "Demote to salesman" : "Promote to admin",
									children: u.role === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" })
								})]
							})]
						}, u.id)), users.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No users found."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => onOpenChange(false),
					children: "Close"
				}) })
			]
		})
	});
}
function Index() {
	const { user, profile, loading, signOut } = useAuth();
	const navigate = useNavigate();
	const [userManagerOpen, setUserManagerOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!loading && !user) navigate({ to: "/login" });
	}, [
		loading,
		user,
		navigate
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Loading..."
		})
	});
	if (!user) return null;
	const isAdmin = profile?.role === "admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "BM iPhone Store"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Stock management & sales register"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: user.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: isAdmin ? "default" : "secondary",
							children: isAdmin ? "Admin" : "Salesman"
						}),
						isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setUserManagerOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mr-1 size-4" }), " Users"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: signOut,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-1 size-4" }), " Logout"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "sales",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "mb-4 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "sales",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "mr-1 size-4" }), " Sales register"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "stock",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { className: "mr-1 size-4" }), " Stock"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "stockout",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "mr-1 size-4" }), " Stock Out"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "summary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "mr-1 size-4" }), " Summary"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "sales",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesRegister, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "stock",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockManager, { role: isAdmin ? "admin" : "salesman" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "stockout",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockOutSummary, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "summary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockSummary, {})
					})
				]
			}),
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserManager, {
				open: userManagerOpen,
				onOpenChange: setUserManagerOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
//#endregion
export { Index as component };
