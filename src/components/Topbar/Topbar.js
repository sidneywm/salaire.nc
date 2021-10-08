import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    marginRight: theme.spacing(1),
  },
  titleIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Topbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          <AccountBalanceIcon className={classes.titleIcon} />
          <b>Salaire</b>.nc
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
