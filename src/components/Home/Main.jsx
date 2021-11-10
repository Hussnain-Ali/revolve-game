import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Section1 from "../HomeSection1/Section1";
import Section2 from "../HomeSection2/Section2";
import Section4 from "../HomeSection4/section4";
import Section5 from "../HomeSection5/Section5";
import Section3 from "../HomeSection3/Section3";
const Main = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div class="main_pageWrapper__2v-ck">
        <Sidebar></Sidebar>
        <div class="Overview_pageWrapper__2XMit" id="mainPage">
          <Section1></Section1>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </div>
    </div>
  );
};

export default Main;
