import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import CategorySection from "./CategorySection/CategorySection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
    </div>
  );
};

export default Home;
