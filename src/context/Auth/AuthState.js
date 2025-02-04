import React, { useContext } from "react";
import backendUrl from "../../config";
import AlertContext from "../alert/AlertContext";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const isAuthenticated = async () => {
    try {
      if (!localStorage.getItem("authToken")) {
        return false;
      }
      const response = await fetch(`${backendUrl}/api/auth/getuser`, {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      });
      const data = await response.json();
      if (!response.ok) {
        // showAlert(
        //   data.errors && data.errors.length > 0
        //     ? data.errors[0].msg
        //     : data.error,
        //   "danger"
        // );
        console.log("auth", data);
        return false;
      }
      return true;
    } catch (error) {
      // showAlert(error.message, "danger");
      return;
    }
  };

  //Signup and authenticate the USer
  const signup = async (credentials, navigate) => {
    try {
      const { email, password, name } = credentials;
      const response = await fetch(`${backendUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password: password }),
      });
      const data = await response.json();
      if (!response.ok) {
        showAlert(
          data.errors && data.errors.length > 0
            ? data.errors[0].msg
            : data.error,
          "danger"
        );
        return;
      }
      localStorage.setItem("authToken", data.authToken);
      showAlert("Account created successfully", "success");
      navigate("/");
    } catch (error) {
      showAlert(error.message, "danger");
      return;
    }
  };

  //Login and authenticate the USer
  const login = async (credentials, navigate) => {
    try {
      const { email, password } = credentials;
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: password }),
      });
      const data = await response.json();
      if (!response.ok) {
        showAlert(
          data.errors && data.errors.length > 0
            ? data.errors[0].msg
            : data.error,
          "danger"
        );
        return;
      }
      localStorage.setItem("authToken", data.authToken);
      navigate("/");
    } catch (error) {
      showAlert(error.message, "danger");
      return;
    }
  };
  const logout = (navigate) => {
    navigate("/login");
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{ alert, login, signup, isAuthenticated, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
