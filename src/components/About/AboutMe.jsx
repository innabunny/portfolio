import React from 'react';
import './About.css';
import { aboutMe } from '../../data';

export default function AboutMe(props) {
  return (
    <div className="about__container about-__container_me">
      {aboutMe.map((element) => {
        return (
          <p className="about__title about__title_me" key={element.id}>
            {props.isTranslate ? element.en : element.ru}
          </p>
        );
      })}
    </div>
  );
}
