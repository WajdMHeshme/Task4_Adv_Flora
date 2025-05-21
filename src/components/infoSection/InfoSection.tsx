import "./InfoSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "./Cards/Card";
import { InfoCardsData } from "../../Data";
const InfoSection = () => {
  return (
    <section>
        <div className="container">
      <SectionTitle
        title="How it Works"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />

      <div className="cardsInfoContainer">
        {
          InfoCardsData.map((card , index) => (
            <Card 
            key={index}
            icon= {card.icon}
            title= {card.title}
            desc= {card.desc}
            styling= {card.styling}
            infoCard= {card.infoCard}
            delay= {card.delay}/>
          ))
        }
      </div>

        </div>
    </section>
  );
};

export default InfoSection;
