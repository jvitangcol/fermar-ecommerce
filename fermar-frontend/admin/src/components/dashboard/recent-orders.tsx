import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>Table</CardContent>
    </Card>
  );
}
