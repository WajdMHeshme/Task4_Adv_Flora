import type { InfoCardsProps } from "../../Types/Type";
import "./ImageSection.css";
const ImageSection = ({ title, desc }: InfoCardsProps<string>) => {
  return (
    <section data-aos = "fade-up" id="imageSection">
        <div data-aos = "zoom-out" data-aos-delay="400" className="text">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
    </section>
  );
};

export default ImageSection;
