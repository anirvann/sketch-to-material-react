
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';


const styles = theme => ({});

const Cards = () => <><Paper style={{
          position: 'relative', 
          width: 1440, 
          height: 351, 
          margin: '0 auto',
          padding: 0,
          backgroundColor: 'rgba(0, 0, 0, 0)'}}
        ><><Card style={{
        position: 'absolute', 
        top: 25, 
        left: 0,
        width: 417.6623229980469,
        height: 351,
        backgroundColor : 'rgba(38.63913103938103,249.6875050663948,34.33202415704727,1)'}}
      ></Card></><><Card style={{
        position: 'absolute', 
        top: 25, 
        left: 519.8961181640625,
        width: 417.6623229980469,
        height: 351,
        backgroundColor : 'rgba(242.00000077486038,153.00000607967377,74.0000031888485,1)'}}
      ></Card></><><Card style={{
        position: 'absolute', 
        top: 25, 
        left: 1022.337646484375,
        width: 417.6623229980469,
        height: 351,
        backgroundColor : 'rgba(247.56250709295273,218.6802113056183,218.6802113056183,1)'}}
      ></Card></></Paper></>

export default withStyles(styles)(Cards);
