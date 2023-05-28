import './About.css'
import photo from "../../img/copy.jpg";

export default function About({isTranslate}) {
  return (
    <>
      <div className='about-__container'>
        <div className='about__text'>
          <h1 className='about__title'>{isTranslate ? "About" : "Обо"} <span className='about__title-blue'>{isTranslate ? "me" : "мне" }</span></h1>
          <p className='about__subtitle'>
            {isTranslate ? "Hello, my name is Inna" : "Привет, меня зовут Инна." }
            <br/>{isTranslate ? "I am a beginner frontend developer" : "Я начинающий Frontend-разработчик." }
            </p>
        </div>
        <img alt='photo' src={photo} className='about__img'></img>
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