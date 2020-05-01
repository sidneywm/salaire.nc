import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(6),
    paddingBottom: theme.spacing(2),
  },
  icon: {
    marginBottom: theme.spacing(0.5),
  },
  text: {
    fontSize: '0.875rem',
    textAlign: 'center',
  },
  heart: {
    color: 'red',
  },
}));
const Copyright = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AccountBalanceIcon className={classes.icon} />
      <Typography variant="subtitle1" className={classes.text}>
        Fait avec <b className={classes.heart}>♥</b> à Nouméa
        <br />© Tous droit réservés 2020 - <b>Salaire.nc</b>
      </Typography>
    </div>
  );
};

export default Copyright;
