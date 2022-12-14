import React from "react";
import GirlFashion from "images/GirlFashion.jpg";

export default function About() {
  return (
    <div className="sm:m-28 sm:mt-12 m-5 text-slate-800 text-xl">
      <h1 className="text-4xl text-center mb-5">Katie DeVault</h1>
      <div className="sm:grid grid-cols-5 content-center">
        <img
          className="w-1/2 h-auto sm:w-full float-left col-span-2"
          src={GirlFashion}
          alt=""
        />
        <p className="col-span-3 self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <p className="col-span-5 sm:m-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
