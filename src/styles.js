import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
switchBase:{
        color: 'purple'},
root: {
        backgroundColor: theme.palette.background.primary,
        color: theme.palette.text.primary,
},
container: {
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
        backgroundColor: theme.palette.background.secondary,
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
change:{
        
       display:"flex",
       flexDirection:"row",
       justifyContent:"center"
},
footer: {
        padding: '50px 0'
}
}))

export default useStyles;