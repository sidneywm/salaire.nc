import React from 'react';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    width: '35%',
  },
  input: {
    width: '100%',
    height: '36px',
    border: 'none',
    backgroundColor: 'rgba(202, 209, 217, 0.3)',
    borderRadius: '0',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    fontSize: '0.875rem',
    padding: '0 1rem',
    '&:focus': {
      outlineColor: '#004b3c',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },

  beforeInput: {
    display: 'flex',
    alignItems: 'center',
    height: '36px',
    color: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(202, 209, 217, 0.3)',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    fontSize: '0.875rem',
    padding: '0 0.3rem 0 1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

const Input = ({ onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.inputArea}>
      <span className={classes.beforeInput}>FCFP</span>
      <NumberFormat
        onValueChange={onChange}
        placeholder="Saisissez un salaire brut mensuel"
        className={classes.input}
        thousandSeparator={' '}
        decimalSeparator={','}
      ></NumberFormat>
    </div>
  );
};

export default Input;
