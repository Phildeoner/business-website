import React from "react";
import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <>
      <MainLayout>
        <div className="flex items-center justify-center h-[90vh]">
          <h1 className="text-6xl font-bold text-red-600">About Page</h1>
        </div>
      </MainLayout>
    </>
  );
}

export default About;
