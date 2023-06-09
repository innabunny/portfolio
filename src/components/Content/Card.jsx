import { useState } from 'react';
import './Content.css'

export default function Card({props, isTranslate}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={props.link} target='_blank' className='content__link' rel="noreferrer"
    onMouseOver={handleMouseOver} 
    onMouseLeave={handleMouseLeave}
    >
      {
        isHovered ? 
        <div className='content__overlay'>{isTranslate ? props.descriptionEN : props.descriptionRU}</div>
        :
        <img src={props.img} className='content__img' alt='image project'></img>
      }
   </a>
  )
}