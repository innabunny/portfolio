import './Resume.css';

export default function Resume() {
  return (
    <>
      <div className="resume__container">
        <h1>Резюме</h1>
        <div className="resume__grid">
          <p className="resume__text resume__text-underline">Город проживания: Москва</p>
          <p className="resume__text ">Дата рождения: 31.03.1993</p>
        </div>
      </div>
    </>
  );
}
