import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Rocket from '@mui/icons-material/RocketLaunch';

const ProjectContainer = ({projectDetails}) => {
    const {title, description, url, img} = projectDetails
    return(
        <Card sx={{ maxWidth: 345, m: 3 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={url} size="small" color="primary" endIcon={<Rocket />}>
                    Go to project
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectContainer;