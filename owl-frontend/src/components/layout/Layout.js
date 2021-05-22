import React, {useState, useEffect, useContext} from 'react';
import Timeline from './timeline/Timeline';
import Navbar from '../Navbar/Navbar.jsx';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import Poster from './poster/Poster.jsx';
import {provider} from '../../firebase';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import { AuthContext } from '../../Auth';



export default function Layout() {

    const {currentUser} = useContext(AuthContext)

    const classes = useStyles();

    useEffect(() => {
       window.localStorage.removeItem('path');
        return () => {
        }
    }, [])

    return (
        <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item xs>
                <Navbar/>
            </Grid>
            <Grid className={classes.middle} item xs>
                <h1 style={{color:'white'}}>Home</h1>
                <Poster/>
               <Timeline />
            </Grid>
            <Grid item xs>
               <h1 style={{color:'white'}}>hello {currentUser.displayName}</h1>
            </Grid>
        </Grid>
           
        </div>
    )
}
