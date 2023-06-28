import './About.css'
import photo from "../../img/photo.png";
import Type from './TypeWriter';

export default function About({isTranslate}) {
  return (
    <>
      <div className='about-__container'>
        <div className='about__text'>
          <h1 className='about__title'>
            {isTranslate ? "Hello, my name is " : "Привет, меня зовут " }
            <strong className='about__title about__title-blue'>
              {isTranslate ?  "Inna!" : "Инна!"}</strong>
            </h1>
            <p className='about__title'> 
              <Type translate={isTranslate}/>
            </p>

        </div>
        <div className='about__img-wrapper'>
      <img alt='photo' src={photo} className='about__img'></img>

        </div>
      </div>
      <h2 className='about__title-stack'>{isTranslate ? "My stack" : "Мой стек"}</h2>
      <div className='about-stack'>
        <div className='about-stack__text'>HTML5</div>
        <div className='about-stack__text'>CSS</div>
        <div className='about-stack__text'>JavaScript</div>
        <div className='about-stack__text'>BEM</div>
        <div className='about-stack__text'>Git</div>
        <div className='about-stack__text'>Адаптивная верстка</div>
        <div className='about-stack__text'>ООП</div>
        <div className='about-stack__text'>Node.js</div>
        <div className='about-stack__text'>React</div>
        <div className='about-stack__text'>MongoDB</div>
      </div>
    </>
  )
}