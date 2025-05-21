import "./TrendingCard.css";
import type { TrendingCardsProps } from "../../../Types/Type";
const TrendingCard = ({
  img,
  price,
  title,
  locationIcon,
  info,
  delay,
  dataAos,
}: TrendingCardsProps) => {
  return (
    <div data-aos-delay= {delay} data-aos= {dataAos} className="TrendingCard">
      <div className="imageContainer">
        <img src={img} alt="img" />
      </div>
      <div className="desc">
        <span>{price}</span>
        <p>{title}</p>
      </div>

      <div className="location">
        <div className="locIcon">{locationIcon}</div>

        <div className="locInfo">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
