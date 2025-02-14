import Image from "next/image";
import logo from "../../../public/logo.png";
import blured from "../../../public/blured.png";

function Header() {
  return (
    <header className="px-10 py-7 font-bold grid grid-cols-[2fr_64px_2fr] gap-5">
      <nav className="flex items-center">
        <ul className="flex justify-start gap-10 items-center">
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
      <div className="flex items-center">
        <Image src={blured} alt="#" className="mx-auto w-16" />
      </div>
      <div className="flex justify-end gap-10 items-center">
        <a href="#">Where To Find Us</a>
        <a href="#">
          <Image src={logo} alt="logo" className="size-8" />
        </a>
      </div>
    </header>
  );
}

export default Header;
