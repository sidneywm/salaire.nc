import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 300,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: '0.875rem',
    marginTop: theme.spacing(2),
  },
  number: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: theme.spacing(2),
  },
}));

const MinimumSalary = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Quelle est le salaire minimum par mois en Nouvelle-Calédonie ?
      </Typography>
      <Typography variant="body" className={classes.text}>
        Le salaire minimun brut par mois en vigueur est de :
      </Typography>
      <Typography variant="body" className={classes.number}>
        156 568 FCFP
      </Typography>
    </div>
  );
};

export default MinimumSalary;
