// icons
import {
  Pen,
  Banknote,
  Package,
  ShoppingCart,
  HandCoins,
  Check,
  Star,
} from "lucide-react";

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
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const reviews = [
  {
    id: "rev1",
    user: "Juan Dela Cruz",
    description:
      "The product quality is outstanding! Exceeded my expectations.",
    date: "2025-04-05",
  },
  {
    id: "rev2",
    user: "Maria Santos",
    description: "Fast delivery and very responsive customer service.",
    date: "2025-03-28",
  },
  {
    id: "rev3",
    user: "Carlos Reyes",
    description: "Packaging was secure. The item arrived in perfect condition.",
    date: "2025-03-21",
  },
  {
    id: "rev4",
    user: "Ana Lopez",
    description: "Affordable prices and excellent quality. Will order again.",
    date: "2025-04-01",
  },
  {
    id: "rev5",
    user: "Miguel Tan",
    description: "Good experience overall, though shipping took a bit longer.",
    date: "2025-03-18",
  },
];

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return (
    <main className="flex flex-col gap-2 h-full mx-5 mb-5">
      {/* Photos & Details */}
      <section className="grid grid-cols-2  gap-2 h-1/2">
        {/* Photos */}
        <div className="bg-secondary rounded-sm">Photos</div>
        {/* Details */}
        <div className="p-4 rounded-lg bg-secondary">
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

            <div className="grid grid-cols-3">
              <div className="flex flex-col font-bold">
                <span>Material</span>
                <span>Weight</span>
                <span>Dimensions</span>
              </div>

              <div className="col-span-2">
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
      <section className="grid grid-cols-4 gap-2 h-1/2">
        {/* Cards */}
        <div className="grid grid-cols-1 grid-rows-4 gap-2 ">
          {/* Price */}
          <div className="py-4 px-7 rounded-sm bg-secondary border">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Price</span>
              <Banknote />
            </div>
            <p className="text-4xl font-medium">1500</p>
          </div>

          {/* Orders */}
          <div className="py-4 px-7 rounded-sm bg-secondary">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Orders</span>
              <Package />
            </div>
            <p className="text-4xl font-medium">9999</p>
          </div>

          {/* Available Stocks */}
          <div className="py-4 px-7 rounded-sm bg-secondary">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Available Stocks</span>
              <ShoppingCart />
            </div>
            <p className="text-4xl font-medium">9999</p>
          </div>
          {/* Total Revenue */}
          <div className="py-4 px-7 rounded-sm bg-secondary">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Total Revenue</span>
              <HandCoins />
            </div>
            <p className="text-4xl font-medium">9999</p>
          </div>
        </div>

        {/* Ratings and Reviews */}
        <div className="col-span-3 p-4 rounded-sm bg-secondary  ">
          {/* Title Card */}
          <h1 className="text-2xl font-semibold">Ratings & Reviews</h1>

          <div className="grid grid-cols-3 gap-9">
            {/* Ratings */}
            <div className="">
              {/*  */}
              <div className="flex gap-3 mb-4">
                {/* Box rating */}
                <div className="flex justify-center items-center h-16 w-16 bg-primary rounded-sm">
                  <p className="text-primary-foreground text-3xl font-semibold">
                    4.7
                  </p>
                </div>
                {/* stars & ratings */}
                <div>
                  <div className="flex gap-1 text-yellow-400">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Base on 5, 338 Ratings
                  </p>
                </div>
              </div>

              {/* Different stars & per number */}
              <div>
                {/* 5 Stars */}
                <div className="flex justify-evenly items-center gap-4">
                  <h6>5</h6>
                  <Progress value={90} />
                  <p>3228</p>
                </div>
                {/* 4 Stars */}
                <div className="flex justify-evenly items-center gap-4">
                  <h6>4</h6>
                  <Progress value={75} />
                  <p>879</p>
                </div>
                {/* 3 Stars */}
                <div className="flex justify-evenly items-center gap-4">
                  <h6>3</h6>

                  <Progress value={50} />
                  <p>54</p>
                </div>
                {/* 2 Stars */}
                <div className="flex justify-evenly items-center gap-4">
                  <h6>2</h6>
                  <Progress value={25} />
                  <p className="">3228</p>
                </div>
                {/* 1 Stars */}
                <div className="flex justify-evenly items-center gap-4">
                  <h6>1</h6>
                  <Progress value={15} />
                  <p>3228</p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="col-span-2">
              <h3 className="font-semibold text-xl mb-5">Review (2,123)</h3>
              <ScrollArea className="h-[300px]">
                {/* First review */}
                {reviews.map((review) => (
                  <>
                    <div className="p-4" key={review.id}>
                      {/* Reviewer name & stars */}
                      <div className="flex justify-between mb-2">
                        <div>
                          <p>{review.user}</p>
                          <p className="text-muted-foreground text-sm">
                            {review.date}
                          </p>
                        </div>
                        <div className="flex gap-1 text-yellow-400">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </div>
                      </div>

                      {/* date, review message, photos */}
                      <div>
                        <p className="mb-3">{review.description}</p>

                        <div className="flex gap-1">
                          {/* images */}
                          <div className="h-14 w-14 bg-primary-foreground rounded-sm" />
                          <div className="h-14 w-14 bg-primary-foreground rounded-sm" />
                          <div className="h-14 w-14 bg-primary-foreground rounded-sm" />
                          <div className="h-14 w-14 bg-primary-foreground rounded-sm" />
                          <div className="h-14 w-14 bg-primary-foreground rounded-sm" />
                        </div>
                      </div>
                    </div>
                    <Separator className="my-2" />
                  </>
                ))}
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
