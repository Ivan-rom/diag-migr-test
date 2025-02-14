import Slider from "../slider/slider";

function Products() {
  return (
    <section id="products" className="bg-lime-100">
      <div className="flex justify-between p-20 pb-5 items-center">
        <h2 className="font-bold text-4xl">Our products</h2>
        <p className="font-thin">
          Make every party cocktail party.{" "}
          <a
            href="#"
            className="relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:bg-black">
            Explore our vodkas.
          </a>
        </p>
      </div>

      <Slider />
    </section>
  );
}

export default Products;
