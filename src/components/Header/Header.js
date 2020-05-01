import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  title: {
    textAlign: 'center',
    fontSize: '1.8rem',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.title}>
          Calculez votre <b>salaire brut/net</b> en Nouvelle-Calédonie.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Header;
