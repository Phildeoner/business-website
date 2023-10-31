import React from "react";
import { Carousel } from "flowbite-react";

function BigCarousel() {
  return (
    <>
      <Carousel className="h-[100vh] ">
        <img className="w-full h-full" alt="..." src="/images/home.jpg" />
        <img className="w-full h-full" alt="..." src="images/home1.jpg" />
        <img className="w-full h-full" alt="..." src="images/home2.jpg" />
        <img className="w-full h-full" alt="..." src="images/home3.jpg" />
      </Carousel>
    </>
  );
}

export default BigCarousel;
