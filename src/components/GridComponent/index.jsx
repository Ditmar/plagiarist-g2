import useFetch from "../../hooks/useFetch";
import ItemComponent from "./ItemComponent";

const GridComponent = ({criterial}) => {
    const {data, isLoading} = useFetch(criterial);
    return (
        <div>
            {isLoading? <div>loading...</div>: 
            data.map(item =>
                <ItemComponent  id={item.id} title={item.title} uri={item.uri}/>
                )} 
        </div>
    );
}
export default GridComponent;