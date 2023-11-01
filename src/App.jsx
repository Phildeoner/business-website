import React from "react";
import MainLayout from "./layouts/MainLayout";
import BigCarousel from "./components/BigCarousel";

function App() {
  return (
    <>
      <MainLayout>
        <div className="relative">
          <BigCarousel />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl text-center z-20 font-bold text-red-600 drop-shadow-lg">
              WELCOME TO BUSINESS WEB
            </h1>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default App;
