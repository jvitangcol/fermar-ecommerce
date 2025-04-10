// component
import { Payment, columns } from "@/components/products/columns";
import { DataTable } from "@/components/products/products-table";

// shadcn
import { Button } from "@/components/ui/button";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "f32ab1c9",
      amount: 250,
      status: "processing",
      email: "john.doe@example.com",
    },
    {
      id: "a17fc6d4",
      amount: 500,
      status: "success",
      email: "jane.smith@example.com",
    },
    {
      id: "c51d98ef",
      amount: 75,
      status: "failed",
      email: "lucas.brown@example.com",
    },
    {
      id: "98ad4e23",
      amount: 300,
      status: "success",
      email: "emma.watson@example.com",
    },
    {
      id: "d1e9a7bc",
      amount: 150,
      status: "processing",
      email: "michael.chan@example.com",
    },
    {
      id: "e2fa3bc9",
      amount: 450,
      status: "pending",
      email: "olivia.jones@example.com",
    },
    // ...
  ];
}

export default async function ProductsPage() {
  const data = await getData();

  return (
    <main className="mx-3">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
