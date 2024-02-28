import {Box} from '@mui/material'

const Card = ({details}) => {
    const {color, percent, text} = details,
    style = {
        "--clr": color,
        "--num": percent
    }
    return(
        <Box className='card'>
            <Box sx={style} className='percent'>
                <Box className='dot'></Box>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <Box className='number'>
                    <h2>{percent}<span>%</span></h2>
                    <p>{text}</p>
                </Box>
            </Box>
        </Box>
    )
}

export default Card;