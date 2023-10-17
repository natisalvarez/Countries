import { getActivities} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from './ActivityCardContainer.module.css';
import Actividad from '../../components/Actividad/Actividad';
import NoActivitiesComponent from "../../components/NoActivitiesComponent/NoActivitiesComponent";
import { SpinnerDotted } from 'spinners-react';

const ActivityCardContainer = () => {
  const actividades = useSelector((state) => state.allActivitiesFilter);
  console.log(actividades)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  
  return (
    <div>
    {loading ? (
        <div className={style.spinner}>
      <SpinnerDotted 
        size={200}
        thickness={100}
        speed={100}
        color="#DF6E5A"
      />
      </div>
    ) : (
    <div className={style.container}>
      {actividades && actividades?.length === 0 ? (
     <NoActivitiesComponent/>
      ) : (
        Object.keys(actividades).map((key) => {
          const actividad = actividades[key];
          return (
              <Actividad activity={actividad} />
          );
        })
      )}
    </div>
)}
</div>
)};

export default ActivityCardContainer;

  {
  /* Opción con Array
  // return (
  //   <div className={style.container}>
  //     <div className={style.cards}>
  //     {Array.isArray(actividades) && actividades?.length === 0 ? (
  //     <div> <h2>You have not created an activity yet! Please, fill in the form to do it!</h2>
  //       </div>
  //    ) : (actividades?.map((actividad) => (
  //         <Actividad key={actividad?.id} activity={actividad} />
  //       ))
  //     )}
  //     </div>
  //   </div>
  // )};

 */}


