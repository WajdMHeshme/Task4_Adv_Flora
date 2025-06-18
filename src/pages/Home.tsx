import Hero from "../components/hero/Hero";
import InfoSection from "../components/infoSection/InfoSection";
import ImageSection from "../components/imageSection/ImageSection";
import TrendingSection from "../components/TrendingSection/TrendingSection";
import BestDealsSection from "../components/bestDealsSection/BestDealsSection";
const App = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <ImageSection
        title="Find Dream Home"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <TrendingSection />
      <BestDealsSection />
    </>
  );
};

export default App;
