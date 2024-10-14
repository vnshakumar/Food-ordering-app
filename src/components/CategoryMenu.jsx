import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice.jsx";

const CategoryMenu = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  const ListUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category); // This will pass the selected category to the parent
  };

  useEffect(() => {
    ListUniqueCategories(); // Call the function to get unique categories on component mount and update on category changes.
  }, []);

  const dispatch = useDispatch();
  const selectCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 
              ${selectCategory === category && "bg-green-500 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
