/* eslint-disable no-unused-vars */
import React from "react";
import FoodCard from "../../components/FoodCard/FoodCard";

const OderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OderTab;
