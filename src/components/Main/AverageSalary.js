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

const AverageSalary = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Salaire moyen
      </Typography>
      <Typography variant="body1" className={classes.text}>
        Selon ISEE en 2013, un salarié à temps plein gagne un salaire mensuel
        moyen net de :
      </Typography>
      <Typography variant="body1" className={classes.number}>
        274 000 FCFP
      </Typography>
    </div>
  );
};

export default AverageSalary;
