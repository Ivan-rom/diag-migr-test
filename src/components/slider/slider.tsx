"use client";

import { useState } from "react";

type SliderElement = {
  id: number;
  img: string;
  name: string;
  description: string;
  buyLink: string;
  infoLink: string;
};

const elements: SliderElement[] = [
  {
    id: 1,
    img: "#",
    name: "Bottle",
    description:
      "A crisp, smooth taste with a splash of citrus and long finish",
    buyLink: "#",
    infoLink: "#",
  },
  {
    id: 2,
    img: "#",
    name: "Bottle",
    description:
      "A crisp, smooth taste with a splash of citrus and long finish",
    buyLink: "#",
    infoLink: "#",
  },
  {
    id: 3,
    img: "#",
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
        className="absolute left-1/3 z-10 p-5 rounded-full border border-black">
        <img
          src="/arrow-curved.svg"
          alt="left"
          className="rotate-180 size-10"
        />
      </button>
      <div className="wrapper w-[90%] mx-auto overflow-hidden">
        <ul
          className={`flex justify-between w-[100%] duration-300 ease-linear translate-x-[-${
            activeElementIndex * 100
          }%]`}>
          {elements.map(({ id, name, img, description, infoLink, buyLink }) => (
            <li key={id} className="flex flex-col items-center min-w-[100%]">
              <img src={img} alt={name} className="h-80 block" />

              {elements[activeElementIndex].id === id && (
                <div className="text-center">
                  <h3 className="font-bold text-xl uppercase mb-2">
                    {name} {id}
                  </h3>
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
              )}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={nextElementHandler}
        className="absolute right-1/3 z-10 p-5 rounded-full border border-black">
        <img src="/arrow-curved.svg" alt="right" className="size-10" />
      </button>
    </div>
  );
}

export default Slider;
