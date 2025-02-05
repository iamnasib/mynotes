import React, { useContext, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/Auth/AuthContext";
const SignupForm = () => {
  const authContext = useContext(AuthContext);
  const { alert, signup } = authContext;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await signup(credentials, navigate);
  };
  return (
    <>
      <Alert alert={alert} />

      <div className="flex flex-col items-center p-4">
        <div className="text-2xl font-medium mb-4">Sign Up</div>
        <form
          onSubmit={onSubmit}
          className="w-full flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullName" value="Your Name" />
            </div>
            <TextInput
              id="fullName"
              type="text"
              placeholder="Nasib Farooq"
              required
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
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
              placeholder="********"
              type={showPassword ? "text" : "password"}
              required
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox onChange={togglePassword} id="remember" />
            <Label htmlFor="remember">Show Password</Label>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
