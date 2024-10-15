import React from "react";
import Login from "./Login";

export default function Button() {
    
  return (
    <div>
      <button className="w-[300px] bg-[#3897f0] text-white mt-3 h-8 rounded-md">
        Log In
      </button>
      <p className="text-center mt-2">
        Don't have a Account?{" "}
        <span className="text-[#3897f0] hover:cursor-pointer">Sign Up</span>
      </p>
    </div>
  );
}
