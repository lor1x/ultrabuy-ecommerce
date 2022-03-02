import * as React from "react";
import { Section1, Section2, Section3 } from "../../components";

import Image3 from "../../images/png/FitForGlory-1000x1000 1.png";
import Image4 from "../../images/png/Feminist-T-Shirts 1.png";
import Image5 from "../../images/png/maxresdefault 1.png";

function IndexPage() {
  return (
    <div className="flex flex-col bg-white">
      <Section1 />

      <Section2 />

      <Section3 />

      {/* Section_4 */}
      <div className="flex flex-col md:flex-row">
        <img className="w-full md:w-1/3" src={Image3} alt="" />
        <img className="w-full md:w-1/3" src={Image4} alt="" />
        <img className="w-full md:w-1/3" src={Image5} alt="" />
      </div>
    </div>
  );
}

export default IndexPage;
