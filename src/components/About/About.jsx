import './About.css'
import photo from "../../img/copy.jpg";

export default function About() {
  return (
    <>
      <div className='about-__container'>
        <div className='about__text'>
          <h1 className='about__title'>Обо <span className='about__title-blue'>мне</span></h1>
          <p className='about__subtitle'>
            Привет, меня зовут Инна.
            <br/>Я начинающий Frontend-разработчик.
            </p>
        </div>
        <img alt='photo' src={photo} className='about__img'></img>
      </div>
      <h2 className='about__title-stack'>Мой стек</h2>
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