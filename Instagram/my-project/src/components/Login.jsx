import React, { useState } from "react";

export default function Login() {
  const [login, setlogin] = useState(true);
  
  const loginSwitch = () => {
    setlogin(!login);
  };
  return (
    <div className="flex flex-col w-[300px] mt-10">
      <div className="flex flex-col w-[300px] gap-6">
        <input
          hidden={login}
          className="h-8 border border-black rounded-md p-2"
          type="text"
          placeholder="Mobile Number or Email"
        />
        <input
          hidden={login}
          type="text"
          placeholder="Full Name"
          className="h-8 border border-black rounded-md p-2"
        />
        <input
          className="h-8 border border-black rounded-md p-2"
          type="text"
          placeholder="Phone Number, username or email"
        />
        <input
          className="h-8 border border-black rounded-md p-2"
          type="password" // Note: Use lowercase 'password' for type
          placeholder="Password"
        />
      </div>

      <div>
        <button className="w-[300px] bg-[#3897f0] text-white mt-3 h-8 rounded-md">
          {login ? "Log In" : "Sign Up"}
        </button>
        <p className="text-center mt-2">
          {login ? "Dont have a Account?" : "Have a account?"}{" "}
          <span
            className="text-[#3897f0] hover:cursor-pointer"
            onClick={loginSwitch}
          >
            {login ? "Sign up" : "Log In"}
          </span>
        </p>
      </div>
    </div>
  );
}
