// icons
import { Pen, Banknote, Package, ShoppingCart, HandCoins } from "lucide-react";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return (
    <main className="flex flex-col gap-5 h-full m-5 border border-red-500">
      {/* Photos & Details */}
      <section className="grid grid-cols-2  gap-5 h-1/2 border border-red-500">
        {/* Photos */}
        <div className=" border border-red-500">Photos</div>
        {/* Details */}
        <div className="p-4 rounded-lg border border-red-500">
          <h1 className="text-2xl font-medium">Stainless Pedal Set</h1>
          <div className="text-sm text-muted-foreground mb-4">
            <span>Category: </span>
            <span>Jeep Parts</span>
          </div>

          {/* Description */}
          <div className="mb-4">
            <h3 className="text-base text-muted-foreground mb-2">
              Product Description
            </h3>
            <p>
              The Stainless Pedal Set is designed for durability and precision,
              ensuring smooth and reliable operation for Filipino jeepneys. Made
              with high-grade stainless steel, it resists rust and corrosion,
              offering long-lasting performance even in tough road conditions.
              This pedal set includes accelerator, brake, and clutch pedals,
              crafted for ergonomic comfort and enhanced grip.
            </p>
          </div>

          {/* Additional Information */}
          <div className="mb-7">
            <h3 className="text-base text-muted-foreground mb-2">
              Additional Information
            </h3>

            <div className="grid grid-cols-3 border border-red-500">
              <div className="flex flex-col font-bold  border border-red-500">
                <span>Material</span>
                <span>Weight</span>
                <span>Dimensions</span>
              </div>

              <div className="col-span-2 border border-red-500">
                <p>304 Stainless Steel, Reinforced Rubber Grip Pads</p>
                <p>3.2 kg (Approximate)</p>
                <div className="flex">
                  <div className="mr-3">
                    <span className="text-muted-foreground">Length: </span>
                    <span>25cm</span>
                  </div>
                  <div className="mr-3">
                    <span className="text-muted-foreground">Width: </span>
                    <span>12cm</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Height: </span>
                    <span>5cm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div>
            <Button>
              <Pen />
              <span>Edit</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Cards & Review */}
      <section className="grid grid-cols-4 gap-5 h-1/2 border border-red-500">
        {/* Cards */}
        <div className="border border-red-500">
          {/* Price */}
          <div className=""></div>
          {/* Orders */}

          {/* Available Stocks */}

          {/* Total Revenue */}
        </div>

        {/* Ratings and Reviews */}
        <div className="border border-red-500 col-span-3">Rating</div>
      </section>
    </main>
  );
}
