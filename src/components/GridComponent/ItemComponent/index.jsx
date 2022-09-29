import Card  from '@mui/material/Card';

const ItemComponent = ({id, title, uri}) => {
    
    return (
        <div>
            <Card key={id} variant="outlined">
                <img src={uri} alt={title} />
                {title}
            </Card>
        </div>
    );
}
export default ItemComponent;