import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { formatNumbers } from '../../common/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginRight: theme.spacing(1),
  },
  number: {
    fontSize: '1.5rem',
  },
}));

const SalaryNetResult = (props) => {
  const { salaryNet } = props.values;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.text}>
        Salaire net :
      </Typography>
      <Typography variant="subtitle1" className={classes.number}>
        {formatNumbers(salaryNet)} FCFP
      </Typography>
    </div>
  );
};

export default SalaryNetResult;
