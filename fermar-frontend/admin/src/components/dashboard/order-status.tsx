import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function OrderStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Order Status Breakdown</CardTitle>
      </CardHeader>
      <CardContent>Table</CardContent>
    </Card>
  );
}
