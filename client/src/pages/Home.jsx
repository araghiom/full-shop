import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import Slider from "../components/Slider";
import StoreCategory from "../components/storeCategory";
import  Title  from "../components/title";
import PapularProducts from "../components/PapularProducts";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <StoreCategory />
      <Title title={"Virtual Try On!"} />
      <Categories />
      <PapularProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
