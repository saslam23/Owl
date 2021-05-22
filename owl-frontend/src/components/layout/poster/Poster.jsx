import React,{useContext, useState} from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import {projectFirestore} from '../../../firebase';
import Button from '@material-ui/core/Button';
import { AuthContext } from '../../../Auth';


export default function Poster() {
  const [hoot, setHoot] = useState('');
  const {currentUser} = useContext(AuthContext)

  const classes = useStyles();

  const createHoot = async () =>{
   await projectFirestore.collection('hoots').add({
      hoot:hoot,
      user: currentUser.displayName

    })
  }
    return (
        <>
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={2}>
                <img style={{height:'60px', width:'60px',marginLeft:'10px', borderRadius:'50%'}} src="/assets/blank-profile.png"/>
            </Grid>
            <Grid item xs={10}>
            <Typography variant="h6" component="h6">
            <InputBase onChange={(e)=> setHoot(e.target.value)} className={classes.input} id="outlined-basic" placeholder="What's happening?" multiline label="What's happening?" variant="filled" />
            <Button onClick={() => createHoot()} variant="contained" color="primary">Hoot</Button>
          </Typography>
            </Grid>
            </Grid>
         
        </div>
        </>
    )
}