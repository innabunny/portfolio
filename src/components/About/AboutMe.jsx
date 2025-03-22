import React from 'react';
import './About.css';
import { aboutMe } from '../../data';

export default function AboutMe(props) {
  console.log(aboutMe[0]);
  return (
    <div className="about__container about__container_me">
      <div className="about__card">
        <p className='about__title about__title_me'>{aboutMe[0].ru}</p>

        <img src={aboutMe[0].image} className='about__photo'/>
      </div>
      {/* {aboutMe.map((element) => {
        return (
          <p className="about__title about__title_me" key={element.id}>
            {props.isTranslate ? element.en : element.ru}
          </p>
        );
      })} */}
    </div>
  );
}
