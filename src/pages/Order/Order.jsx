/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import orderCover from '../../assets/assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
// import FoodCard from '../../components/FoodCard/FoodCard';
import OrderTab from './OderTab';
import { useParams } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Order = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<TabPanel class="' + className + '">' + (index + 1) + '</TabPanel>';
        },
      };    
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const {category} = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    // console.log(category)
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");


     // Utility function to chunk an array
    const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) =>
    i % size ? acc : [...acc, arr.slice(i, i + size)], []);

    // Chunking the salads array
    const chunkedSalads = chunkArray(salad, 6);
    const chunkedPizza = chunkArray(pizza, 6);
    const chunkedSoup = chunkArray(soup, 6);
    const chunkedDesserts = chunkArray(desserts, 6);
    const chunkedDrinks = chunkArray(drinks, 6);
    // ekhanne ami iccha korle 6 er jaygay 3 o dite pari or 9

    return (
        <div>
            <Helmet>
                <title>Restro. - Order Food</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food" />

            {/* tabs */}
            <div className='max-w-screen-xl mx-auto'>
                <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        {/* Tab list items here */}
                        <Tab>Salads</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <Swiper pagination={pagination} modules={[Pagination]} className='mySwiper'>
                        {chunkedSalads.map((chunk, index) => (
                            <SwiperSlide key={index}>
                            <OrderTab items={chunk} />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </TabPanel>
                    <TabPanel>
                    <Swiper pagination={pagination} modules={[Pagination]} className='mySwiper'>
                        {chunkedPizza.map((chunk, index) => (
                            <SwiperSlide key={index}>
                            <OrderTab items={chunk} />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                        {/* <OrderTab items={pizza} /> */}
                    </TabPanel>
                    <TabPanel>
                    <Swiper pagination={pagination} modules={[Pagination]} className='mySwiper'>
                        {chunkedSoup.map((chunk, index) => (
                            <SwiperSlide key={index}>
                            <OrderTab items={chunk} />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    {/* <OrderTab items={soup} /> */}
                    </TabPanel>
                    <TabPanel>
                    <Swiper pagination={pagination} modules={[Pagination]} className='mySwiper'>
                        {chunkedDesserts.map((chunk, index) => (
                            <SwiperSlide key={index}>
                            <OrderTab items={chunk} />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    {/* <OrderTab items={desserts} /> */}
                    </TabPanel>
                    <TabPanel>
                    <Swiper pagination={pagination} modules={[Pagination]} className='mySwiper'>
                        { chunkedDrinks.map((chunk, index) => (
                            <SwiperSlide key={index}>
                            <OrderTab items={chunk} />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    {/* <OrderTab items={drinks} /> */}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Order;
