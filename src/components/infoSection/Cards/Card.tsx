import "./Card.css";
import type { InfoCardsProps } from "../../../Types/Type";

const Card = ({
  icon,
  title,
  desc,
  styling,
  infoCard,
  delay,
}: InfoCardsProps<string>) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={delay}
      className={infoCard}
      id={styling}
    >
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
