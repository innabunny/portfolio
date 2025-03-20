import React from 'react';
import About from '../About/About';
import Content from '../Content/Content';

export default function MainPage(props) {
  return (
    <>
      <About isTranslate={props.isTranslate} />
      <Content isTranslate={props.isTranslate} />
    </>
  );
}
