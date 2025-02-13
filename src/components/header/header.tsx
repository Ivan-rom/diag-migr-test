function Header() {
  return (
    <header className="flex justify-between p-10 font-bold">
      <nav>
        <ul className="flex justify-between gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Cocktails</a>
          </li>
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Garnished with Goods</a>
          </li>
        </ul>
      </nav>
      {/* <div className="blur">
        <img src="#" alt="#" />
      </div> */}
      <div className="flex justify-between gap-10">
        <a href="#">Where To Find Us</a>
        <a href="#">
          <img src="#" alt="logo" />
          {/* logo */}
        </a>
      </div>
    </header>
  );
}

export default Header;
