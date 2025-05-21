import Navbar from "./components/Navbar/Navbar";
import Logo from "./assets/logo.svg";
import Hero from "./components/hero/Hero";
import InfoSection from "./components/infoSection/InfoSection";
import ImageSection from "./components/imageSection/ImageSection";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import BestDealsSection from "./components/bestDealsSection/BestDealsSection";
import Footer from "./components/footer/Footer";
import { Loader } from "./Loader/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar logo={Logo} btnTitle="Login" />
      <Hero />
      <InfoSection />
      <ImageSection
        title="Find Dream Home"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <TrendingSection />
      <BestDealsSection />
      <Footer />
    </>
  );
};

export default App;
