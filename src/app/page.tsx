import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Products from "@/components/products/products";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Products />
      </main>
    </>
  );
}
