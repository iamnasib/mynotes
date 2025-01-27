import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const LoginForm = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="text-2xl font-medium mb-4">Login</div>
      <form onSubmit="" className="w-full flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="example@email.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            placeholder="********"
            type="password"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
};

export default LoginForm;
