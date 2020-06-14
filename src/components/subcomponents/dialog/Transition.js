import React, { forwardRef } from 'react';
import { Slide } from '@material-ui/core';

export const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});