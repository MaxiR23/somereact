import { Container } from "@mui/system";
import BodyCardContainer from "./BodyCardContainer";

export default function ItemListContainer() {
    return (
        <>
            <Container fixed sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 2
            }}>
                <BodyCardContainer />
            </Container>
        </>
    )
}

