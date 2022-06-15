import Box from '@mui/material/Box';

export default function ItemListContainer({greetings}) {
    return (
        <Box sx={{
            display:'flex',
            justifyContent: 'center',
        }}>
            <p> {greetings} </p>
        </Box>
    )
}

