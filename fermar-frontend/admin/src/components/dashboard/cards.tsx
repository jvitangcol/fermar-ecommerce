// packages
import {
  Package,
  CircleDot,
  SquareCheck,
  HandCoins,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";

// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const iconMap = {
  orders: Package,
  pending: CircleDot,
  completed: SquareCheck,
  revenue: HandCoins,
  products: ShoppingCart,
  users: Users,
};

export function CardWrapper() {
  return (
    <section className="grid grid-cols-6 gap-2">
      <CardData title="Orders" data={1200} type="orders" />
      <CardData title="Pending" data={45} type="pending" />
      <CardData title="Completed" data={1155} type="completed" />
      <CardData title="Revenue" data={24500} type="revenue" />
      <CardData title="Products" data={50} type="products" />
      <CardData title="Users" data={350} type="users" />
    </section>
  );
}

export function CardData({
  title,
  data,
  type,
}: {
  title: string;
  data: number | string;
  type: "orders" | "pending" | "completed" | "revenue" | "products" | "users";
}) {
  const Icon = iconMap[type];

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <CardTitle className="text-base text-muted-foreground font-normal">
          {title}
        </CardTitle>
        {Icon ? <Icon className="text-muted-foreground " /> : null}
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{data}</p>
      </CardContent>
    </Card>
  );
}
