
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({});

const HeroBanner = () => <><Paper style={{
          position: 'relative', 
          width: 1440, 
          height: 400, 
          margin: '0 auto',
          padding: 0,
          backgroundColor: 'rgba(47, 128, 237, 1)'}}
        ><></><><Typography style={{
        position: 'absolute', 
        top: 247, 
        left: 642,
        width: 116,
        height: 28,
        color : 'rgba(242.00000077486038,242.00000077486038,242.00000077486038,1)'}}
      >Read More</Typography></><><Typography style={{
        position: 'absolute', 
        top: 129, 
        left: 371,
        width: 716,
        height: 118,
        color : 'rgba(242.00000077486038,242.00000077486038,242.00000077486038,1)'}}
      >Lorem Ipsum is simply dummy text of the printing and typese
tting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, </Typography></></Paper></>

export default withStyles(styles)(HeroBanner);
