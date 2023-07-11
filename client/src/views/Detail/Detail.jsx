import {useParams} from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    return (
        <h1>
            Esto es Detail!
        </h1>
    )
};

export default Detail;