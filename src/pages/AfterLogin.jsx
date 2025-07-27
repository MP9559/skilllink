import React from "react";
import NavbarLogin from "../component/NavbarLogin";
import CategorySection from "../component/CategorySection";
import SuggestionForm from "../component/SuggestionForm";
// import BrowsingCards from '../component/BrowsingCards'

const AfterLogin = () => {
  return (
    <div>
      <div>
        <NavbarLogin />
      </div>
      <CategorySection />
      <SuggestionForm />
      {/* <BrowsingCards /> */}
    </div>
  );
};

export default AfterLogin;
