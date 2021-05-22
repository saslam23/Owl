import React, {useState, useRef, useEffect, useContext} from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import {projectFirestore} from '../../../firebase';
import { AuthContext } from '../../../Auth';

export default function Timeline() {
    const [info, setInfo] = useState([]);
    const {currentUser} = useContext(AuthContext);
    useEffect( () => {
            projectFirestore.collection('hoots').onSnapshot((snap)=>{
                const users = snap.docs.map(doc =>{
                  const data = doc.data();
                    return data;
                });
               
                setInfo(users)
              })

    }, [])
    const classes = useStyles();
    const path = window.localStorage.getItem('path');
    return (
        <div>
            {info.map((item)=>{
                return(
                    <div className={classes.root}>
                        {item.user === currentUser.displayName && path ? 
                        <>
                               <Grid container spacing={3}>
                               <Grid item xs={2}>
                                 <img style={{height:'60px', width:'60px',marginLeft:'10px', borderRadius:'50%'}} src="/assets/blank-profile.png"/>
                               </Grid>
                               <Grid item xs={10}>
                               <Typography variant="h6" component="h6">
                                 <div className={classes.hoot}>
                                 <h4>{item.user}</h4>
                                  <p>{item.hoot}</p>
                                 </div>
                             </Typography>
                               </Grid>
                               </Grid>
                               <hr/>
                               </>
                               : 
                               !path ?
                               <>
                               <Grid container spacing={3}>
                               <Grid item xs={2}>
                                 <img style={{height:'60px', width:'60px',marginLeft:'10px', borderRadius:'50%'}} src="/assets/blank-profile.png"/>
                               </Grid>
                               <Grid item xs={10}>
                               <Typography variant="h6" component="h6">
                                 <div className={classes.hoot}>
                                 <h4>{item.user}</h4>
                                  <p>{item.hoot}</p>
                                 </div>
                             </Typography>
                               </Grid>
                               </Grid>
                               <hr />
                               </>: null
                    }
               
                </div>
                )
            })}
        </div>
    )
}
