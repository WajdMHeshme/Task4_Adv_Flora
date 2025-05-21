import './SectionTitle.css'
import type { SectionTitleProps } from '../../Types/Type'
const SectionTitle = ({title , desc} : SectionTitleProps<string> ) => {
  return (
    <div className='mainHeading'>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default SectionTitle
