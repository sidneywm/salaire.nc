import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  text: {
    fontSize: '0.875rem',
    textAlign: 'center',
  },
}));
const Copyright = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.text}>
        © Copyright 2020 - <b>Salaire.nc</b> par Sidney Wimart
      </Typography>
    </div>
  );
};

export default Copyright;
