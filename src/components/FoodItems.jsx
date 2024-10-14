import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => {
    toast.success(`${name} added to cart successfully!`, {
      position: "top-center",
      duration: 2000,
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } 
          else{
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())

          }
  
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            img={food.img}
            desc={food.desc}
            rating={food.rating}
            handleToast={handleToast} // Pass handleToast to FoodCard
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
