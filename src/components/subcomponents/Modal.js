import React, { useState } from 'react';
// eslint-disable-next-line
import { makeStyles, Modal, Backdrop, Fade, Link, Typography } from '@material-ui/core';
import useStyles from "../../resources/styles/subcomponents/modalStyles";

export default function TransitionsModal({ information }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const component=!information.info?information.subtitle:(
    <Link href="#" color="inherit" onClick={handleOpen}>
        {information.subtitle}
    </Link>
  )

  return (
    <div>
        <Typography variant="body2">
            {component}
        </Typography>
        
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className={classes.paper}>
                <h2 id="transition-modal-title">{information.info}</h2>
                <p id="transition-modal-description">react-transition-group animates me.</p>
            </div>
            </Fade>
        </Modal>
        </div>
    );
}