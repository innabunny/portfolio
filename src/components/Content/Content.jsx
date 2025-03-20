import './Content.css';
import Card from './Card';
import { array } from '../../data';
import { MdOutlinePets } from 'react-icons/md';

export default function Content({ isTranslate }) {
  return (
    <>
      <div className="content__flex">
        <MdOutlinePets color="rgba(2, 228, 192, 1)" size="40px" />
        <h2 id="project" className="content__title">
          {isTranslate ? 'Pet projects' : 'Пет проекты'}
        </h2>
      </div>
      <div className="content__grid">
        {array.map((item) => {
          return <Card key={item.id} props={item} isTranslate={isTranslate} />;
        })}
      </div>
    </>
  );
}
