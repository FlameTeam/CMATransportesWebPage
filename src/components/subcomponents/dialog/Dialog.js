import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Typography } from '@material-ui/core';
import { Transition } from "./Transition";
import { DefaultButton } from "../../../resources/styles/subcomponents/buttonStyle";

export default function TransitionsDialog({ information }) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleOpen = (scrollType)=> (event) => {
    event.preventDefault();
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const component=!information.info?information.subtitle:(
    <Link href="#" color="inherit" onClick={handleOpen('paper')}>
        {information.subtitle}
    </Link>
  )

  return (
    <div>
      <Typography variant="body2">
              {component}
      </Typography>

      <Dialog
        open={open}
        scroll={scroll}
        TransitionComponent={Transition}
        maxWidth="md"
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {information.subtitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" color="initial">
              {information.info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DefaultButton onClick={handleClose}>
            Salir
          </DefaultButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

