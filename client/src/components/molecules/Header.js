
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({});

const Header = () => <><AppBar style={{
          position: 'relative', 
          width: 1440, 
          height: 75, 
          margin: '0 auto',
          padding: 0,
          backgroundColor: 'rgba(255, 255, 255, 1)'}}
        ><Toolbar style={{
          position: 'relative', 
          width: 1440, 
          height: 75, 
          margin: '0 auto',
          padding: 0,
          backgroundColor: 'rgba(255, 255, 255, 1)'}}
        ><></><><Typography style={{
        position: 'absolute', 
        top: 26, 
        left: 1123,
        width: 49,
        height: 21,
        color : 'rgba(0,0,0,1)'}}
      >Home</Typography></><><Typography style={{
        position: 'absolute', 
        top: 26, 
        left: 1224,
        width: 74,
        height: 21,
        color : 'rgba(0,0,0,1)'}}
      >About Us</Typography></><><Typography style={{
        position: 'absolute', 
        top: 26, 
        left: 1336,
        width: 89,
        height: 21,
        color : 'rgba(0,0,0,1)'}}
      >Contact Us</Typography></><><Typography style={{
        position: 'absolute', 
        top: 16, 
        left: 20,
        width: 88,
        height: 42,
        color : 'rgba(0,0,0,1)'}}
      >GALE</Typography></></Toolbar></AppBar></>

export default withStyles(styles)(Header);
