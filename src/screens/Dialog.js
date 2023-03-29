import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
// import { useState } from 'react';

const Dialogue = (props) => {

    const text = `Welcome to Little Lemon Restaurant, where we are passionate about providing our guests 
    with an exceptional dining experience. Our restaurant is located in the heart of the city, and 
    we offer a comfortable and inviting atmosphere for all occasions, whether it be a romantic dinner 
    for two or a family celebration.\n

    At Little Lemon, we pride ourselves on using the freshest ingredients to create delicious and innovative 
    dishes. Our menu is inspired by a blend of international flavors and locally sourced produce, ensuring 
    that each dish is packed with flavor and nutrition.\n

    Our skilled chefs use traditional cooking techniques combined with modern culinary trends to craft dishes 
    that are both visually appealing and bursting with flavor. Our friendly staff are committed to providing 
    outstanding service, and we are dedicated to ensuring that our guests have a memorable experience.\n
    
    At Little Lemon, we believe that dining should be an experience to be savored and enjoyed. We invite 
    you to join us for a meal and discover the magic of Little Lemon Restaurant.`;
    const paragraphs = text.split('\n\n');

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: 30, }}>
                    Why Us
                </DialogTitle>
                {paragraphs.map((para , index ) => (
                    <DialogContentText id="alert-dialog-description" sx={{ mx: 3, my: 1 }} key={index}>
                        {para}
                    </DialogContentText>
                ))}
                <DialogActions>
                    <Button sx={{ color: 'black' }} onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Dialogue;