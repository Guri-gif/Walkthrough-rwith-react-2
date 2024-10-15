import React from "react";
import Logo from "./logo";
import Login from "./Login";

export default function Container() {
  return (
    <div className="w-[400px] h-[500px] mx-[600px] mt-[100px] rounded-xl shadow-2xl flex flex-col items-center">
      <Logo />
      <Login/>
    </div>
  );
}
