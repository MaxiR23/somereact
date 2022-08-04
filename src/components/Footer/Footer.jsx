import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Footer = () => {
    return (
        <Container sx={{ display:'flex', justifyContent:'center', backgroundColor:'white', color:'black', padding:2}}>
            <Typography variant="body1"> { `© Derechos reservados Maxi Rebolo <>` } </Typography>
        </Container>
    )
}

export default Footer;