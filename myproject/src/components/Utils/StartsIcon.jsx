import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function StarsIcon({stars}) {

    let array = [];

    if (stars === 1) {
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
    } else if (stars === 2) {
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
    } else if (stars === 3) {
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
    } else if (stars === 3.5) {
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarHalfIcon fontSize='small'/>)
        array.push(<StarOutlineIcon fontSize='small'/>)
    } else if (stars === 4) {
    } else if (stars === 4.5) {
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarHalfIcon fontSize='small'/>)
    } else if (stars === 5) {
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
        array.push(<StarIcon fontSize='small'/>)
    } else {
        array = []
    }
    
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
           {array.map((star, i) => {
            return (
                <div key={i}>
                    {star}
                </div>
            )
           })}
        </div>
    )
}