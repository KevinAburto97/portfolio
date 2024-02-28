import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import ProjectContainer from '../ProjectContainer';
import orgImg from "../../assets/img/projects/org.png"
import encriptador from "../../assets/img/projects/encriptador.png"
import aluraflix from "../../assets/img/projects/aluraflix.png"
import etiquetas from "../../assets/img/projects/etiquetas.png"

const Projects = () => {
    const projects = [
        {
            title: "Org. Form - Alura Latam",
            description: "A single page made in class, learning about hooks and useState in React",
            url: "https://org-nine-omega.vercel.app/",
            img: orgImg
        },
        {
            title: "Text Encrypter",
            description: "A challenge developed in the Alura Latam course, this project consists of developing a text encryptor and decryptor.",
            url: "https://encriptador-rust.vercel.app/",
            img: encriptador
        },
        {
            title: "Label Generator",
            description: "A web application, in charge of managing the number of labels per product to be printed per day.",
            url: "#",
            img: etiquetas
        },
        {
            title: "Aluraflix",
            description: "Another challenge of the Alura Latam course, made in pure react, this project is in charge of displaying a list of movies, obtaining the information from a public API.",
            url: "https://aluraflix-henna-nine.vercel.app/",
            img: aluraflix
        }
    ],
    [value, setValue] = useState(0),
    handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', bgcolor: '#2a2a2a' }}>
            <Tabs
                className='tabs-container'
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                    ".Mui-selected": {
                        color: `#1eff05 !important`,
                    }
                }}
                TabIndicatorProps={{
                    color: '#f9f9f9',
                    sx: {
                        backgroundColor: '#1eff05',
                    },
                }}
            >
                {
                    (projects).map((project, id) => {
                        return <Tab key={id} className='tab-button' label={`Project #${id+1}`} />        
                    })
                }
            </Tabs>
            <Paper sx={{display: 'flex', justifyContent: 'center', bgcolor: 'transparent'}}>
                {
                    <ProjectContainer projectDetails={projects[value]}/>
                }
            </Paper>
        </Box>
    )
}

export default Projects;