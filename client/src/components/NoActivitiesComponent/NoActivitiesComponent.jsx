import { useNavigate } from "react-router-dom";
import style from "./NoActivitiesComponent.module.css";

const NoActivitiesComponent = () => {
    const back = useNavigate();

return(
    <div className={style.container}>
    <h2 className={style.noActivities}>You have not created an activity yet!
        <br />
        Please, fill in the form to do it!</h2>
    <div>
        <button className={style.button} onClick={() => back('/form')}>
            Form
        </button>
    </div>
</div>
)};

export default NoActivitiesComponent;