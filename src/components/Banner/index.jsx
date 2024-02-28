import {Box, Grid, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import ProfilePic from "../../assets/img/profile-picture.png"
import { useState } from 'react';
import { useEffect } from 'react';
const Banner = () => {
    const toRotate = ['Front-End', 'Backend-End', 'Mobile'],
    [loopNum, setLoopNum] = useState(0),
    [isDeleting, setIsDeleting] = useState(false),
    [text, setText] = useState(''),
    [delta, setDelta] = useState(300 - Math.random() * 1000),
    period = 2000,
    Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '320px',
        maxHeight: '320px',
    }),
    tick = () => {
        let i = loopNum % toRotate.length,
        fullText = toRotate[i],
        updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)
        if(isDeleting)
            setDelta(prevDelta => prevDelta / 2)
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    return(
        <Box m={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={7} sx={{
                    margin: 'auto'
                }}>
                    <Typography component="span" sx={{
                        fontWeight: 700,
                        letterSpacing: '0.8px',
                        padding: '8px 10px',
                        fontSize: '20px',
                        marginBottom: '16px',
                        display: 'inline-block'
                    }}>
                        Welcome to my Portfolio
                    </Typography>
                    <Typography className='bannerText'
                    variant='h3'
                    component='h3'>
                        {
                            `Hello!, I am a packed dev`
                        }
                        <span className='wrap'>
                            {`{${text}}`}
                        </span>
                    </Typography>
                    <Typography component='p'>
                        My love for technology isn't just a profession; it's a way of life. I relish the opportunity to create innovative solutions and thrive in dynamic, fast-paced environments. My drive to stay at the forefront of technological advancements has led me to continuously seek out new challenges and learning experiences.
                        <b>I believe that embracing change is fundamental to personal and professional growth.</b>
                    </Typography>
                </Grid>
                <Grid className='bannerImg' item xs={12} md={6} xl={5}>
                    <Img src={ProfilePic}></Img>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner;