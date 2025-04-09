import { CardWrapper } from "@/components/dashboard/cards";

import { roboto } from "@/components/shared/font";

export default function DashboardPage() {
  return (
    <main className="mx-3">
      <h1 className={`${roboto.className} mb-4 text-3xl font-bold`}>
        Dashboard
      </h1>
      <div>
        <CardWrapper />
      </div>
    </main>
  );
}
