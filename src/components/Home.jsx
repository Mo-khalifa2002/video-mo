import React from "react";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Process from "./Process/Process";
import Services from "./Servieces/Services";
import Software from "./Software/Software";
import Testemonilas from "./Testemonials/Testemonilas";
import Footer from "./Footer/Footer";
import Scroll from "./Scroll/Scroll";
import Pricing from "./Pricing/Pricing";
import Frank from "./Frank/Frank";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      {/* <Frank /> */}
      <Process />
      <Contact />
      <Testemonilas />
      <Pricing />
      <Software />
      {/* <Footer /> */}
      <Scroll />
    </div>
  );
};

export default Home;
