import "./BestDealsSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import FiltringSection from "./FiltringSection/FiltringSection"
const BestDealsSection = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle
          title="Best Real Estate Deals"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        />


        <FiltringSection />
      </div>
    </section>
  );
};

export default BestDealsSection;
