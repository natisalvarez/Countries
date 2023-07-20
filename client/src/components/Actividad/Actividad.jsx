
import style from './Actividad.module.css';

// recibe activity por props
// componente tonto/dump
const Actividad = ({ activity }) => {
  
  return (
    <div className={style.cardContainer}>
      <h3 className={style.cardInfo}>Name: {activity.name}</h3>

      {/*<div className={style.imgContainer}>
                <img alt="imageCountry" className={style.image} />
  </div>*/}

      <h3 className={style.cardTitle}>Difficulty: {activity.difficulty}</h3>
      <h3 className={style.cardTitle}>Season: {activity.season}</h3>
      <h3 className={style.cardTitle}>Duration: {activity.duration} </h3>
      <h3 className={style.cardTitle}>Countries:</h3>
      <div>
           {/* si hay una propiedad countries en activity hago el mapeo */}
            {/* cuando mapeo es necesario usar la key para que react no rompa:
            la mejor key es el ID */}

      {activity.Countries && activity.Countries.map((element) => (
        <h3 key={element.id}>{element.name}</h3>
      ))}
      </div>
    </div>
  );
};

export default Actividad;


/* 

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