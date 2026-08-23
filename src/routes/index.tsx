import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BarChart3, Boxes, LogOut, ReceiptText, Truck, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StockManager } from "@/components/StockManager";
import { SalesRegister } from "@/components/SalesRegister";
import { StockSummary } from "@/components/StockSummary";
import { StockOutSummary } from "@/components/StockOutSummary";
import { UserManager } from "@/components/UserManager";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BM iPhone Store — Stock & Sales Register" },
      {
        name: "description",
        content:
          "Manage BM iPhone Store inventory and record sales with auto invoice numbers, 13% VAT and Excel export.",
      },
      { property: "og:title", content: "BM iPhone Store — Stock & Sales Register" },
      {
        property: "og:description",
        content:
          "Stock management and sales register with auto invoice numbering, 13% VAT and Excel export.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [userManagerOpen, setUserManagerOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/login" });
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  const isAdmin = profile?.role === "admin";

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">BM iPhone Store</h1>
          <p className="text-sm text-muted-foreground">Stock management &amp; sales register</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{user.email}</span>
          <Badge variant={isAdmin ? "default" : "secondary"}>
            {isAdmin ? "Admin" : "Salesman"}
          </Badge>
          {isAdmin && (
            <Button variant="outline" size="sm" onClick={() => setUserManagerOpen(true)}>
              <Users className="mr-1 size-4" /> Users
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut className="mr-1 size-4" /> Logout
          </Button>
        </div>
      </header>

      <Tabs defaultValue="sales">
        <TabsList className="mb-4 flex-wrap">
          <TabsTrigger value="sales">
            <ReceiptText className="mr-1 size-4" /> Sales register
          </TabsTrigger>
          <TabsTrigger value="stock">
            <Boxes className="mr-1 size-4" /> Stock
          </TabsTrigger>
          <TabsTrigger value="stockout">
            <Truck className="mr-1 size-4" /> Stock Out
          </TabsTrigger>
          <TabsTrigger value="summary">
            <BarChart3 className="mr-1 size-4" /> Summary
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sales">
          <SalesRegister />
        </TabsContent>
        <TabsContent value="stock">
          <StockManager role={isAdmin ? "admin" : "salesman"} />
        </TabsContent>
        <TabsContent value="stockout">
          <StockOutSummary />
        </TabsContent>
        <TabsContent value="summary">
          <StockSummary />
        </TabsContent>
      </Tabs>

      {isAdmin && <UserManager open={userManagerOpen} onOpenChange={setUserManagerOpen} />}
    </main>
  );
}
