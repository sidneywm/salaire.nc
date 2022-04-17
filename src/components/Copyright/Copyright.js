import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(6),
    paddingBottom: theme.spacing(2),
  },
  icon: {
    marginBottom: theme.spacing(0.5),
  },
  text: {
    fontSize: "0.875rem",
    textAlign: "center",
  },
  heart: {
    color: "red",
  },
  github: {
	fontSize: "0.875rem",
	marginTop: theme.spacing(1),
	display: "flex",
	alignItems: "center"
  },
  githubImg: {
	  width: "20px",
	  marginRight: theme.spacing(1),
  }


}));
const Copyright = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AccountBalanceIcon className={classes.icon} />
      <Typography variant="subtitle1" className={classes.text}>
        Fait avec <b className={classes.heart}>♥</b> à Nouméa
        <br />© Tous droit réservés 2022 - <b>Salaire.nc</b>
      </Typography>
	  <a className={classes.github} href="https://github.com/sidneywm/salaire.nc" target="_blank" rel="noopener noreferrer">
		  <img className={classes.githubImg} src="/images/github.png" alt="Github" />
		  <span>Voir le code source sur GitHub</span>
	  </a>
    </div>
  );
};

export default Copyright;
