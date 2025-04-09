// component
import { Payment, columns } from "@/components/products/columns";
import { DataTable } from "@/components/products/products-table";

// shadcn
import { Button } from "@/components/ui/button";

const data = [
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
];

export default function ProductsPage() {
  return (
    <main className="mx-3">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Product Management</h1>
        <Button>Add Product</Button>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
