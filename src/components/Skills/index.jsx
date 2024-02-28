import {Grid, Box, Typography, Container} from '@mui/material'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from '../Card';

const Skills = () => {
    const skills = [
        {
            text: 'HTML',
            color: '#04fc43',
            percent: 95
        },
        {
            text: 'CSS',
            color: '#1cedae',
            percent: 95
        },
        {
            text: 'JS',
            color: '#c2ff05',
            percent: 90
        },
        {
            text: 'PHP',
            color: '#ae3dff',
            percent: 90
        },
        {
            text: 'React',
            color: '#2b97fa',
            percent: 80
        },
        {
            text: 'Kotlin',
            color: '#1eff05',
            percent: 70
        },
        {
            text: 'C#',
            color: '#6664ff',
            percent: 70
        },
        {
            text: 'Mysql',
            color: '#43b5a0',
            percent: 90
        }

    ],
    options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };

    return(
        <Box m={3}>
            <Grid container>
                <Grid item xs={12}>
                    <Box>
                        <Typography variant='h2' component='h2'>Skills</Typography>
                        <p>Here you can find my abilities :)</p>
                        <Box className='card-container'>
                            <OwlCarousel  
                                id="customer-testimonoals" 
                                className="owl-carousel owl-theme" 
                                {...options}
                            >
                                {
                                    skills.length === 0 ?
                                        <></>
                                        :
                                        skills.map((skill) => {
                                            return(<Card details={skill} key={skill.text}/>)
                                        })
                                }
                            </OwlCarousel >
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skills;