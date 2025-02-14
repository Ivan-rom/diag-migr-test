"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import bottle1 from "../../../public/bottle-1.jpg";
import bottle2 from "../../../public/bottle-2.png";
import bottle3 from "../../../public/bottle-3.jpg";
import arrow from "../../../public/arrow-curved.svg";

type SliderElement = {
  id: number;
  img: string | StaticImageData;
  name: string;
  description: string;
  buyLink: string;
  infoLink: string;
};

const elements: SliderElement[] = [
  {
    id: 1,
    img: bottle1,
    name: "Bottle",
    description:
      "A crisp, smooth taste with a splash of citrus and long finish",
    buyLink: "#",
    infoLink: "#",
  },
  {
    id: 2,
    img: bottle2,
    name: "Bottle",
    description:
      "A crisp, smooth taste with a splash of citrus and long finish",
    buyLink: "#",
    infoLink: "#",
  },
  {
    id: 3,
    img: bottle3,
    name: "Bottle",
    description:
      "A crisp, smooth taste with a splash of citrus and long finish",
    buyLink: "#",
    infoLink: "#",
  },
];

function Slider() {
  const [activeElementIndex, setActiveElementIndex] = useState<number>(1);

  function prevElementHandler() {
    if (activeElementIndex === 0) {
      setActiveElementIndex(elements.length - 1);
    } else {
      setActiveElementIndex(activeElementIndex - 1);
    }
  }

  function nextElementHandler() {
    if (activeElementIndex === elements.length - 1) {
      setActiveElementIndex(0);
    } else {
      setActiveElementIndex(activeElementIndex + 1);
    }
  }

  return (
    <div className="flex items-center">
      <button
        onClick={prevElementHandler}
        className="absolute left-[20%] z-10 p-5 rounded-full border border-black">
        <Image src={arrow} alt="left" className="rotate-180 size-10" />
      </button>
      <div className="wrapper w-[100%] mx-auto overflow-hidden">
        <ul
          className={`flex justify-center items-center w-[100%] mx-auto duration-500 ease-in-out translate-x-0`}
          style={{ translate: `${50 - activeElementIndex * 50}%` }}>
          {elements.map(({ id, name, img, description, infoLink, buyLink }) => (
            <li key={id} className="flex flex-col items-center min-w-[50%]">
              <Image src={img} alt={name} className="size-96 mb-10" />

              <div
                className={`text-center duration-300 grid grid-rows-[0fr] opacity-0 ${
                  elements[activeElementIndex].id === id &&
                  "grid-rows-[1fr] opacity-100" // for smooth height changing
                  // "bouncing" without additional content below
                }`}>
                <div className="overflow-hidden">
                  <h3 className="font-bold text-xl uppercase mb-2">{name}</h3>
                  <p className="mb-6">{description}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={buyLink}
                      className="block px-6 py-3 bg-red-700 text-white">
                      Where To Buy
                    </a>
                    <a
                      href={infoLink}
                      className="block px-6 py-3 bg-black text-white">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={nextElementHandler}
        className="absolute right-[20%] z-10 p-5 rounded-full border border-black">
        <Image src={arrow} alt="right" className="size-10" />
      </button>
    </div>
  );
}

export default Slider;
