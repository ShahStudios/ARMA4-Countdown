import React, { Component } from 'react';

import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const sideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -60
        });
        props.onClose(false);
    }

    return (
        
        <Drawer 
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
        
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('home')}>Home</ListItem>
                <ListItem button onClick={()=> scrollToElement('news')}>News</ListItem>
                <ListItem button onClick={()=> scrollToElement('pre-order')}>Pre-Order</ListItem>
            </List>
        </Drawer>
    );
};

export default sideDrawer;