import { Container } from "@mui/system";
import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <>
            <Container sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 2
            }}>

                {items.map((item) => (
                    <Item key={item.id} item={item}></Item>
                ))}
            </Container>
        </>
    )
}

export default ItemList;