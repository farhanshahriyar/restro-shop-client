/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/assets/menu/banner3.jpg'
import dessertImg from '../../assets/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/assets/menu/salad-bg.jpg'
import soupImg  from '../../assets/assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/sectionTitle/sectionTitle';
import MenuCategory from './MenuCategory/ManuCategory';

const Menu = () => {
  const [menu] = useMenu();
  // creating data
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
   return (
    <div>
      <Helmet>
        <title>Restro. - Menu</title>
      </Helmet>
       <Cover img={menuImg} title={"Our Menu"}/>
       {/* main cover */}
        <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
        {/* offered menu items */}
        <div className='max-w-screen-xl mx-auto'>
          <MenuCategory items={offered} />
          {/* dessert items */}
          <MenuCategory items={desserts} title="dessert" img={dessertImg } />
          <MenuCategory items={pizza} title="pizza" img={pizzaImg } />
          <MenuCategory items={salad} title="salad" img={saladImg } />
          <MenuCategory items={soup} title="soup" img={soupImg } />
        </div>
    </div>
  )
}

export default Menu
