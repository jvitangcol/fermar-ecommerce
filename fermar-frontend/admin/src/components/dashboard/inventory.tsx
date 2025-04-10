import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Inventory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Inventory</CardTitle>
      </CardHeader>
      <CardContent>Table</CardContent>
    </Card>
  );
}
