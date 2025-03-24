import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const Login = (): JSX.Element => {
  const handleLogin = () => {
    // Redirect to the Dustbin project using full URL
    window.location.href = "http://localhost:5179";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center px-16 py-0 w-full max-w-[480px]">
        <h2 className="text-3xl font-bold mb-4">Log In</h2>
        <p className="text-center mb-8">Lorem ipsum dolor sit amet adipiscing elit.</p>

        <div className="w-full space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-solid border-black rounded-none"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-solid border-black rounded-none"
          />
          <Button 
            onClick={handleLogin}
            className="w-full bg-black text-white p-3 rounded-none"
          >
            Log in
          </Button>

          <Separator className="my-4" />

          <Button variant="outline" className="w-full flex items-center justify-center gap-2 p-3 border border-solid border-black rounded-none">
            <img src="/icon---google.svg" alt="Google" className="w-6 h-6" />
            Log in with Google
          </Button>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2 p-3 border border-solid border-black rounded-none">
            <img src="/icon---facebook.svg" alt="Facebook" className="w-6 h-6" />
            Log in with Facebook
          </Button>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2 p-3 border border-solid border-black rounded-none">
            <img src="/icon---apple.svg" alt="Apple" className="w-6 h-6" />
            Log in with Apple
          </Button>
        </div>

        <div className="mt-6 text-center space-y-2">
          <Button variant="link" className="text-black underline">
            Forgot your password?
          </Button>
          <div className="flex items-center justify-center gap-2">
            <span>Don't have an account?</span>
            <Button variant="link" className="text-black underline">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};