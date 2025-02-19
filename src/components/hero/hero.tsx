function Hero() {
  return (
    <section
      id="home"
      className='flex flex-col items-center mb-40 relative bg-[url("/hero.jpg")] bg-cover bg-no-repeat bg-top'>
      <h1 className="text-7xl font-bold pt-36 pb-72 text-white text-center">
        Welkom to Cocktail
      </h1>
      <form
        action="#"
        className="bg-red-700 text-white p-10 flex flex-col items-center gap-5 translate-y-24">
        <h2 className="font-bold text-xl">
          We&apos;re here to help you make the most of cocktail hour.
        </h2>
        <input
          type="text"
          name="search"
          placeholder="Search for..."
          className="p-5 rounded-full placeholder-black font-bold"
        />
        <p className="text-sm">
          Browse our curated cocktails by cocktail name, occasion or key
          ingredient
        </p>
      </form>
    </section>
  );
}

export default Hero;
