import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {positions} from '@material-ui/core/AppBar'


const NavBar = () => {
    return (
        <div>
            <AppBar position = "top">
             <Toolbar>
                <Typography variant = {"h2"} color = {"inherit"}>
                    Microservices
                </Typography>
             </Toolbar>
            </AppBar>
        </div>

    );
}


export default NavBar;