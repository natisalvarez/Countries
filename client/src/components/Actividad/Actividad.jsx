
import style from './Actividad.module.css';
import { deleteActivity } from '../../Redux/actions';
import { useDispatch } from 'react-redux';

let image = 'https://lottie.host/1a3d7496-4de5-41a6-aa0a-8500ef2ba7ef/Wzd1PXZ8i8.json';

// recibe activity por props
// componente tonto/dump
const Actividad = ({ activity }) => {
const dispatch = useDispatch ();

  const onClick = () =>{
    dispatch(deleteActivity(activity.id));
  }
  
  return (
    <div className={style.cardContainer}>
      <h3 className={style.cardInfo}>Name: {activity?.name}</h3>
      <div className={style.imgContainer}>
      <iframe className={style.image} src="https://lottie.host/?file=1a3d7496-4de5-41a6-aa0a-8500ef2ba7ef/Wzd1PXZ8i8.json"></iframe>
      {/* <img className={style.image} src={activity.Countries.coatOfArms} alt="" /> </div> */}
      {/* {activity.Countries && activity.Countries.map((element) => (
        <div key={element.id}> {element?.coatOfArms} </div>
      ))}  */} </div>
      <h3 className={style.cardTitle}>Difficulty level: {activity?.difficulty}</h3>
      <h3 className={style.cardTitle}>Season: {activity?.season}</h3>
      <h3 className={style.cardTitle}>Duration: {activity?.duration} </h3>
      <h3 className={style.cardTitle}>Country:</h3>
      <div>
      {activity.Countries && activity.Countries.map((element) => (
        <h3 className={style.countryName} key={element?.id}>{element?.name}</h3>
      ))}
      </div>
      <button className={style.cardTitle} onClick={(activity?.id)}> Delete </button>
    </div>
  );
};

export default Actividad;


/* 
<iframe src="https://lottie.host/?file=8fcb7ecd-67d4-48b8-b872-a294ed62ea45/ZFAv6hhY04.json"></iframe>

{
  Countries: [
    {
      id: 'COL',
      name: 'Colombia',
      image: 'https://flagcdn.com/co.svg',
      continent: 'South America',
      subregion: 'South America',
      area: 1141748,
      population: 50882884,
      Activities: [  
        {
          name: 'Swimming',
          CountryActivity: {
            createdAt: '2023-07-18T13:18:28.156Z',
            updatedAt: '2023-07-18T13:18:28.156Z',
            CountryId: 'COL',
            ActivityId: 26
          }
        }
      ]
    },

*/