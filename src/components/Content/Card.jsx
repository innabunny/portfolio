import { useState } from 'react';
import './Content.css'

export default function Card({props}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href='#' className='content__link' 
    onMouseOver={handleMouseOver} 
    onMouseLeave={handleMouseLeave}
    >
      {
        isHovered ? 
        <div className='content__overlay'>{props.description}</div>
        :
        <img src={props.img} className='content__img'></img>
      }
   </a>
  )
}