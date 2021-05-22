import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root:{
        flexGrow:1,
        
    },
    paper:{
        padding: theme.spacing(2),
        textAlign:'center',
        color:theme.palette.text.secondary
    },
    middle:{
        border: "solid 1px gray",
        height:'auto'
    }
}));