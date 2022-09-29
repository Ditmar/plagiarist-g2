
import ItemComponent from "./ItemComponent";

const GridComponent = ({data, isLoading}) => {
    
    return (
        <div>
            {isLoading? <div>loading...</div>: 
            data.map(item =>
                <ItemComponent key={item.id}  id={item.id} title={item.title} uri={item.uri}/>
                )} 
        </div>
    );
}
export default GridComponent;