import './Content.css';
import Card from './Card';
import { array } from '../../data';

export default function Content() {

  return (
    <>
      <h2 id='project' className='content__title'>Мои проекты</h2>
      <div className="content__grid">
        {
          array.map((item) => {
            return(
            <Card key={item.id} props={item}/>
          )})
        }
      </div>
    </>
  )
}