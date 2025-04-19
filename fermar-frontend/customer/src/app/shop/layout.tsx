import { oswald } from "@/components/shared/fonts";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="lg:container mx-auto mt-[84px] ">
        <h1 className={`${oswald.className} text-3xl font-bold mb-5 px-5 `}>
          Products
        </h1>
        <hr className="bg-primary h-1 mb-2" />
      </div>

      {children}
    </>
  );
}
