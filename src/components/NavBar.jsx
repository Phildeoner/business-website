import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar fluid rounded className="shadow-md bg-gray-100 fixed z-30 w-full">
        <Navbar.Brand href=".">
          <img
            src="images/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Company Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white text-red-600">
            Business Web
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/" active>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
