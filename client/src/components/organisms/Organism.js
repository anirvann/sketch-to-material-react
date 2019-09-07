
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../molecules/Header';
import HeroBanner from '../molecules/HeroBanner';
import Cards from '../molecules/Cards';

const styles = theme => ({});

const figmaData = () => {

    return (<><Header/><HeroBanner/><Cards/></>);
}

export default withStyles(styles)(figmaData);
