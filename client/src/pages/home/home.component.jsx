import React from "react";
import Slider from "../../components/slider/slider.component";

import FeaturedProducts from "../../components/featured-products/featured-products.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
