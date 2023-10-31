import React from "react";
import { Carousel } from "flowbite-react";

function BigCarousel() {
  return (
    <>
      <Carousel onSlideChange={(slideIdx) => console.log(slideIdx)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </>
  );
}

export default BigCarousel;
