import React from "react";

export default function Signup() {
  return (
    <div className="flex flex-col w-[300px] mt-10">
      <input
        className="h-8 border border-black rounded-md p-2"
        type="text"
        placeholder="Full Name"
      />
      <br />
      <input
        className="h-8 border border-black rounded-md p-2"
        type="email"
        placeholder="Email"
      />
      <br />
      <input
        className="h-8 border border-black rounded-md p-2"
        type="password"
        placeholder="Password"
      />
    </div>
  );
}
