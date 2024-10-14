import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
          className="border-2 border-gray-300 text-sm rounded-lg w-full pl-3 focus:outline-none lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};
export default Navbar;
