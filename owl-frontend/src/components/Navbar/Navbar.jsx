import React, { useContext } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import { AuthContext } from '../../Auth';

export default function Navbar() {
    const classes = useStyles();
    const {currentUser} = useContext(AuthContext);

    const savePath = () =>{
        window.localStorage.setItem('path', `/profile/${currentUser.displayName}`);
    }

    return (
        <div>
            <Tabs className={classes.root} orientation="vertical">
            <Link to="/"><Tab className={classes.tabs} label="Home" /></Link>
            <Link to={"/profile/" + currentUser.displayName} onClick={()=> savePath()} ><Tab className={classes.tabs} label="Profile"/></Link>
            <Link to="/notification"><Tab className={classes.tabs} label="Notification" /></Link>
            <Link to="/logout"><Tab className={classes.tabs} label="Logout" /></Link>
            </Tabs>
        </div>
    )
}
