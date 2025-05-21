import './TrendingSection.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import TrendingCard from './TrendingCards/TrendingCard'
import { TrendingCardData } from '../../Data'
const TrendingSection = () => {
  return (
    <section id='gallery'>
        <div className="container">

      <SectionTitle 
      title='Most Trending'
      desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli'/>

      <div className="TrendingCardsContainer">
        {
            TrendingCardData.map((card , index) => (
                <TrendingCard
                key={index} 
                img= {card.img}
                price= {card.price}
                title= {card.title}
                locationIcon= {card.locationIcon}
                info= {card.info}
                delay= {card.delay}
                dataAos= {card.dataAos}/>
            ))
        }
      </div>

        </div>
    </section>
  )
}

export default TrendingSection
