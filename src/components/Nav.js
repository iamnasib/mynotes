import React, { useState, useContext, useEffect } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/Auth/AuthContext";
const Nav = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const auth = async () => {
      const auth = await isAuthenticated();
      setIsAuth(auth);
      if (
        (!auth && location.pathname === "/home") ||
        location.pathname === "/"
      ) {
        navigate("/login");
      }
    };
    auth(); // eslint-disable-next-line
  }, [isAuthenticated, navigate]);
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
        <div className="flex gap-4 flex-col md:flex-row items-center">
          {isAuth && (
            <Navbar.Link
              active={
                location.pathname === "/" || location.pathname === "/home"
              }>
              <Link to="/">Home</Link>
            </Navbar.Link>
          )}
          <Navbar.Link active={location.pathname === "/about"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          {!isAuth ? (
            <>
              <Button>
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/signup">Signup</Link>
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                logout(navigate);
              }}>
              Logout
            </Button>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
