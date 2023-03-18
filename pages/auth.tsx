import Input from "@/components/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
       await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  id="name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  value={name}
                />
              )}
              <Input
                label="Email"
                id="email"
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md font-bold hover:bg-red-800 w-full px-5 mt-10 transition"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <div className="flex items-center justify-center mt-8 gap-4">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="flex items-center justify-center bg-white hover:opacity-80 cursor-pointer w-10 h-10 rounded-full transition "
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="flex items-center justify-center bg-white hover:opacity-80 cursor-pointer w-10 h-10 rounded-full transition "
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-10">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}{" "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={toggleVariant}
              >
                {variant === "login" ? "Create an account" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
