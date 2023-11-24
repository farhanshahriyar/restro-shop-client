/* eslint-disable no-unused-vars */
import React from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    // custom hook
    const [menu, loading] = useMenu();
    const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
