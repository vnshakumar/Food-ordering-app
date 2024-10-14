import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating,handletoast }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-3 flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px]">
      <div className="w-full h-[150px] flex justify-center items-center overflow-hidden">
        <img
          src={img}
          alt="Food Image"
          className="w-auto h-full object-contain hover:scale-110 cursor-grab transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="text-sm flex justify-between items-center mt-3">
        <h3 className="text-md font-semibold">{name}</h3>
        <span className="text-gray-500 text-sm">₹{price}</span>
      </div>
      <div className="my-2">
        <p className="text-sm font-normal text-gray-600">
          {desc.slice(0, 50)}...
        </p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="flex items-center">
          <AiFillStar className="mr-1 text-yellow-400" />
          <span className="text-sm">{rating}</span>
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price,img, rating, qty: 1 }))
            handletoast(name);
          }}
          className="p-2 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
