import React, { useState, useContext } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import AuthContext from "../context/Auth/AuthContext";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const { alert, login } = authContext;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(credentials, navigate);
  };

  return (
    <>
      <Alert alert={alert} />
      <div className="flex flex-col items-center p-4">
        <div className="text-2xl font-medium mb-4">Login</div>
        <form
          onSubmit={onSubmit}
          className="w-full flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              autoComplete="email"
              type="email"
              placeholder="example@email.com"
              required
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              autoComplete="current-password"
              placeholder="********"
              type="password"
              required
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Log in</Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
