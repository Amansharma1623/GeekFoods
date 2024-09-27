import React from "react";

import Navbar from './navbar/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/footer/Footer'
import Split from '../components/Spilt'
import Feedback from '../components/Feedback'
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Split />
      <Feedback />
      <Footer />
    </>
  );
}
export default Home;
