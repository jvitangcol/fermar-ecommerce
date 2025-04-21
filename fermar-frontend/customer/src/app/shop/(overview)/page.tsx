import Image from "next/image";

import { products } from "@/components/homepage";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ShopPage() {
  return (
    <main>
      <section className="mx-5 my-10">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-2.5 justify-center">
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  className="bg-background py-0 rounded-none gap-2"
                >
                  <CardHeader className="relative aspect-square w-full overflow-hidden p-0 gap-0">
                    <Image
                      src={product.image}
                      alt={product.productName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </CardHeader>
                  <CardContent className="px-2">
                    <CardTitle>{product.productName}</CardTitle>
                    <CardDescription>{product.productCategory}</CardDescription>
                  </CardContent>
                  <CardFooter className="px-2 pb-2">{product.price}</CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
