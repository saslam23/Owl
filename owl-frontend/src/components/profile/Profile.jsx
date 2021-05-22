import React,{useContext} from 'react'
import {AuthContext} from "../../Auth";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Timeline from '../layout/timeline/Timeline';
import Navbar from '../Navbar/Navbar';
import useStyles from './styles';

export default function Profile() {
    const {currentUser} = useContext(AuthContext);
    const classes = useStyles();
    return (
        <>
        <Grid container>
            <Grid item xs>
            <Navbar/>
            </Grid>
            <Grid className={classes.middle} item xs>
            <div className={classes.card}>
                <div className={classes.top}>
                    <img className={classes.img} src="/assets/blank-profile.png"/>
                     <h3 className={classes.name}>{currentUser.displayName}</h3>
               
                </div>

            </div>
            <div>
                <h3 style={{color:'white', paddingLeft:'2rem'}}>Hoots</h3>
            <Timeline />
            </div>
            </Grid>
            <Grid item xs>
                <h1 style={{color:'white'}}>Users</h1>
            </Grid>
            
        </Grid>
        </>
    )
}
