import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    middle:{
        border: "solid 1px gray",
        height:'auto'
    },
    card:{
        height:'300px',
        maxWidth:'800px',
        position:'relative',
        backgroundColor:'#ffb347'
    },
    top:{
        position:'absolute',
        width:'100%',
        height:'150px',
        backgroundColor:'#f29b1f'
    },
    img:{
        height:'120px',
        width:'120px',
        marginTop:'80px',
        marginLeft:'20px',
        borderRadius:'50%'
    },
    name:{
        marginLeft:'35px',
        color:'white'
    }
}))