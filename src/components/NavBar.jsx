import React from "react";
import { Button, Navbar } from "flowbite-react";

function NavBar() {
  return (
    <>
      <Navbar fluid rounded className="shadow-md bg-gray-100">
        <Navbar.Brand href=".">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Company Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Business Web
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Products</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
