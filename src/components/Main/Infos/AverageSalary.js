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

const AverageSalary = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.icon}
        src="/images/bars.svg"
        alt="Salaire moyen en Nouvelle-Calédonie"
      ></img>
      <Typography variant="h3" className={classes.title}>
        Salaire moyen
      </Typography>
      <Typography variant="body1" className={classes.text}>
        Selon l'
        <a
          href="https://www.isee.nc/component/phocadownload/category/271-salaires?download=1973:salaires-de-2013-a-2019-synthese-43"
          rel="noopener noreferrer"
          target="_blank"
        >
          ISEE
        </a>{' '}
        en 2019, un salarié à temps plein gagne en moyenne un salaire mensuel
        net de :
      </Typography>
      <Typography variant="body1" className={classes.number}>
        342 000 FCFP
      </Typography>
    </div>
  );
};

export default AverageSalary;
