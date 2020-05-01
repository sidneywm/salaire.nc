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
  icon: {
    width: '3.2rem',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 300,
    textAlign: 'center',
    marginTop: theme.spacing(2),
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
      <img
        className={classes.icon}
        src="/images/line.svg"
        alt="Salaire minimum en Nouvelle-Calédonie"
      ></img>
      <Typography variant="h3" className={classes.title}>
        Salaire minimum
      </Typography>
      <Typography variant="body1" className={classes.text}>
        Depuis le 1er octobre 2018, le{' '}
        <a
          href="https://dtenc.gouv.nc/vos-droits-vos-obligations/remuneration/le-salaire-minimum-garanti"
          rel="noopener noreferrer"
          target="_blank"
        >
          salaire minimum
        </a>{' '}
        brut garanti par mois en Nouvelle-Calédonie est de :
      </Typography>
      <Typography variant="body1" className={classes.number}>
        156 568 FCFP
      </Typography>
    </div>
  );
};

export default MinimumSalary;
