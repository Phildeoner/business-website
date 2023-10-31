import React from "react";
import NavBar from "./components/NavBar";
import FooterComp from "./components/FooterComp";
import BigCarousel from "./components/BigCarousel";

function App() {
  return (
    <>
      <NavBar />
      <div className="relative">
        <BigCarousel />
        <h1 className="absolute text-6xl top-[40%] left-[20%] z-20 font-bold text-red-600 drop-shadow-lg">
          WELCOME TO BUSINESS WEB
        </h1>
      </div>
      <FooterComp />
    </>
  );
}

export default App;
