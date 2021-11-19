import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
container: {
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: 'white',
        padding: theme.spacing(8, 0, 6),
        
},
icon: {
        marginRight: '20px'
},
button: {
        marginTop: '40px'
},
cardGrid:{
        padding: '25px'
},
card:{
        height:"100%",
        display:"flex",
        flexDirection:"column"
},
cardMedia:{
        //  ratio of 16:9 below
        paddingTop:"56.25%"
},
cardContent:{
        flexGrow: 1
        
},
footer: {
        // backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
}
}))

export default useStyles;