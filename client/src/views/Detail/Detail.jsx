import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryByDetail, cleanDetail } from "../../Redux/actions";
import style from './Detail.module.css';


const Detail = () => {
  const back = useNavigate(); //Me permite volver para atrás sin montar todo el componente

  const dispatch = useDispatch();
  const { id } = useParams(); //lo que viene por URL
  const details = useSelector((state) => state.countryDetail);
  // selecciono el estado countryDetail
  console.log(details)

  useEffect(() => {
    dispatch(getCountryByDetail(id)) //despacha cuando se monta
    return () => {
      dispatch(cleanDetail()) // despacha cuando se desmonta
    }
  }, [dispatch, id]);


  return (
    <div className={style.detailWrapper}>
      <div className={style.containerDetail}>
      <iframe
          src="https://lottie.host/?file=4cefb2ae-491f-42ef-8a75-7a4086f3300a/ho4qFKsZkX.json"
          className={style.backgroundIframe}
        ></iframe>
        <section className={style.img}>
          <div>
            {details?.types?.map((item) => (
              <p key={item.id}>{item.name.toUpperCase()}</p>
            ))}
          </div>
          <img
            src={details.image}
            alt={`${details.name} sprite`}
            className={style.detailImg}
          />
        </section>
        <section className={style.infoDetail}>
          <h1 className={style.detailName}>{details.name}</h1>

          <div className={style.details}>
            <p>Name: {details.name}</p>
            <p>ID: {id}</p>
            <p>Continent: {details.continent}</p>
            <p>Capital: {details.capital}</p>
            <p>Subregion: {details.subregion}</p>
            <p>Area: {details.area}</p>
            <p>Population: {details.population}</p>
          </div>
        </section>

        <div>
          <button className={style.button} onClick={() => back('/home')}>
            Back
          </button>
        </div>
      </div>

    </div>
  );
}

export default Detail;


  /*
  const [showActivities, setShowActivities] = useState(false);

  useEffect(() => {
    // Actualizar el estado de las actividades cuando el estado countryDetail cambie
    if (details && details.Activities && details.Activities.length > 0) {
      setShowActivities(true);
    } else {
      setShowActivities(false);
    }
  }, [details]);

  const handleToggleActivities = () => {
    setShowActivities(!showActivities);
  };
*/