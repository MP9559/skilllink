import React from "react";
import NavbarLogin from "../component/NavbarLogin";
import CategorySection from "../component/CategorySection";
import SuggestionForm from "../component/SuggestionForm";
import GreenCards from "../component/GreenCards";
import PopularGigsSection from "../component/PopularGigsSection";
import AppDesignSection from "../component/AppDesignSection";
import ProCards from "../component/ProCards";
import Presence from "../component/Presence";

// import BrowsingCards from '../component/BrowsingCards'

const AfterLogin = () => {
  return (
    <div>
        <NavbarLogin />
      <CategorySection />
      <GreenCards />
      <SuggestionForm />
      <PopularGigsSection />
      <ProCards />
      {/* <Presence /> */}
      {/* <AppDesignSection /> */}

    </div>
  );
};

export default AfterLogin;
