import React from "react";
import { Header, Footer } from "../../components";
const MainLauout = ({ childern }) => {
  return (
    <div>
      <Header />
      {childern}
      <Footer />
    </div>
  );
};

export default MainLauout;
