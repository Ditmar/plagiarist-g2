import { useParams } from "react-router-dom";

const Detail = () => {
    const {slug} = useParams();

    return <div>
        detail page
        {slug}
    </div>
}

export default Detail;