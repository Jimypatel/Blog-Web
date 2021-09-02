
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://cdn.stocksnap.io/img-thumbs/960w/computer-keyboard_DGPONB4TR9.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Introduction</Typography>
                <Typography variant="h5" className={classes.text}>I'm a final year student at PDEU<br />
                continuously develop these kind of app and software and keep learning .
                    <Box component="span" style={{ margin: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ margin: 7 }}>
                        <Link href="https://www.instagram.com/jimypatel112/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Box component="span" style={{ margin: 7 }}>
                        <Link href="mailto:jimypatel960@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                        </Box>
                </Typography>
            </Box>
        </Box>
    )
}

export default About;