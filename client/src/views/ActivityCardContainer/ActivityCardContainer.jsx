import { getActivities, getCountryActivity } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from './ActivityCardContainer.module.css';
import Actividad from '../../components/Actividad/Actividad';

const ActivityCardContainer = () => {
  const actividades = useSelector((state) => state.allActivitiesFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    
    <div className={style.container}>
      <div className={style.cards}>
      
          {Array.isArray(actividades) &&
            actividades.map((actividad) => (
              <Actividad key={actividad.id} activity={actividad} />
            ))}
      
      </div>
    </div>
  );
};


export default ActivityCardContainer;

