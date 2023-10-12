import { getActivities, getCountryActivity, deleteActivity } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from './ActivityCardContainer.module.css';
import Actividad from '../../components/Actividad/Actividad';

const ActivityCardContainer = () => {
  const actividades = useSelector((state) => state.allActivitiesFilter);
  console.log(actividades)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  
  return (
    <div className={style.container}>
    <div className={style.cards}>
      {actividades && actividades?.length === 0 ? (
        <div>
          <h2>You have not created an activity yet! Please, fill in the form to do it!</h2>
        </div>
      ) : (
        //Hay que usar object.keys porque actividades no es un array. 
        Object.keys(actividades).map((key) => {
          const actividad = actividades[key];
          return (
            <div key={key}>
              <Actividad activity={actividad} />
            </div>
          );
        })
      )}
    </div>
  </div>
)};

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

export default ActivityCardContainer;


