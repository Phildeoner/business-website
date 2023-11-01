import React from "react";
import NavBar from "../components/NavBar";
import FooterComp from "../components/FooterComp";

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <FooterComp />
    </>
  );
}

export default MainLayout;
