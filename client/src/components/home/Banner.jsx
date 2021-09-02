import { makeStyles, Box, Typography} from "@material-ui/core";


const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://pixabay.com/get/g21bdc508c8dc5e7c3296df7e14c31406f80b64410c917251c6abf002a8708dff8a43074123b767a95df5ea92eead6778_640.jpg'}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'bottom-right',
        justifyContent: 'center',
        fontSize: 65,
        color: '#FFFFFF'
        // '& :first-child': {
        //     fontSize: 65,
        //     color: '#FFFFFF',
        //     lineHeight: 1
        // },
        // '& :last-child': {
        //     fontSize: 25,
        //     background: '#FFFFFF',
        // }
    }
})

const Banner = () => {
    const classes = useStyle();
    return(
        <Box className={classes.image}>
                <Typography>Hello <br/>Hope you like this</Typography>
            
            </Box>
        ) 
}

export default Banner;              