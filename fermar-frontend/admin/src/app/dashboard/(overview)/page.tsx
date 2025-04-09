// components
import { CardWrapper } from "@/components/dashboard/cards";
import { TopSellingChart } from "@/components/dashboard/chart-top-selling";
import { OrderStatus } from "@/components/dashboard/order-status";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { Inventory } from "@/components/dashboard/inventory";
import { roboto } from "@/components/shared/font";

export default function DashboardPage() {
  return (
    <main className="mx-3 ">
      <h1 className={`${roboto.className} mb-4 text-3xl font-bold`}>
        Dashboard
      </h1>
      <div className="mb-4">
        <CardWrapper />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <TopSellingChart />
        <OrderStatus />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <RecentOrders />
        <Inventory />
      </div>
    </main>
  );
}
