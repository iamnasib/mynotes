import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  const location = useLocation();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src="/favicon.ico"
          className="mr-3 h-6 sm:h-9"
          alt="My Notes Logo"
        />

        <Link
          to="/"
          className="self-center whitespace-nowrap uppercase text-xl font-semibold dark:text-white">
          My Notes
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex gap-4 flex-row items-center">
          <Navbar.Link
            className="mr-4"
            active={location.pathname === "/" || location.pathname === "/home"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={location.pathname === "/about"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={location.pathname === "/login"}>
            <Button className="bg-transparent hover:text-white text-black">
              <Link to="/login">Login</Link>
            </Button>
          </Navbar.Link>
          <Navbar.Link active={location.pathname === "/signup"}>
            <Button>
              <Link to="/signup">Signup</Link>
            </Button>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
