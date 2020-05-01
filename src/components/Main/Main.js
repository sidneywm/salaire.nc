import React from 'react';

import { rates } from '../../common/constants';
import { roundNumber } from '../../common/utils';

import { makeStyles } from '@material-ui/core/styles';

import Alert from '@material-ui/lab/Alert';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SalaryBrutInput from './SalaryBrutInput';
import SalaryNetResult from './SalaryNetResult';
import TableSummary from './TableSummary';
import MinimumSalary from './Infos/MinimumSalary';
import AverageSalary from './Infos/AverageSalary';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  inputBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  inputField: {
    width: '30ch',
  },
  inputBtn: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(3)}px ${theme.spacing(3)}px 0 ${theme.spacing(
        3
      )}px`,
    },
  },
  inputImg: {
    marginLeft: theme.spacing(14),
    width: '150px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  alert: {
    justifyContent: 'center',
    width: 'fit-content',
    margin: '0 auto',
  },
}));

const Main = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    salaryBrut: null,
    salaryNet: 0,
    ruamm: {
      tranche1: 0,
      tranche2: null,
    },
    retraite: 0,
    chomage: 0,
    ccs: 0,
    retraiteAgircArrco: {
      tranche1: 0,
      tranche2: null,
    },
    ceg: 0,
    cet: 0,
  });

  React.useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        calculate();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const calculate = () => {
    if (values.salaryBrut && values.salaryBrut > 0) {
      const salaryBrut = values.salaryBrut * 1;
      const output = {
        ruamm: {
          tranche1: roundNumber(
            (salaryBrut > 510500 ? 510500 : salaryBrut) * rates.ruamm.tranche1
          ),
          tranche2:
            salaryBrut >= 510501
              ? roundNumber(
                  (salaryBrut > 5279700
                    ? 5279700 - 510501
                    : salaryBrut - 510501) * rates.ruamm.tranche2
                )
              : null,
        },
        retraite: roundNumber(
          (salaryBrut > 363700 ? 363700 : salaryBrut) * rates.retraite
        ),
        chomage: roundNumber(
          (salaryBrut > 363700 ? 363700 : salaryBrut) * rates.chomage
        ),
        ccs: roundNumber(salaryBrut * rates.ccs),
        retraiteAgircArrco: {
          tranche1: roundNumber(
            (salaryBrut > 409069 ? 409069 : salaryBrut) *
              rates.retraiteAgircArrco.tranche1
          ),
          tranche2:
            salaryBrut >= 409070
              ? roundNumber(
                  (salaryBrut > 3272554
                    ? 3272554 - 409070
                    : salaryBrut - 409070) * rates.retraiteAgircArrco.tranche2
                )
              : null,
        },
        ceg: roundNumber(
          (salaryBrut > 409069 ? 409069 : salaryBrut) * rates.ceg
        ),
        cet: 0,
      };
      setValues({
        ...values,
        ...output,
        salaryNet:
          salaryBrut -
          output.ruamm.tranche1 -
          output.ruamm.tranche2 -
          output.retraite -
          output.chomage -
          output.ccs -
          output.retraiteAgircArrco.tranche1 -
          output.retraiteAgircArrco.tranche2 -
          output.ceg,
      });
    }
  };

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12}>
        <div className={classes.inputBox}>
          <TextField
            label="Salaire brut mensuel* (FCFP)"
            helperText="*Hors avantages en nature et tickets restaurant"
            className={classes.inputField}
            value={values.salaryBrut}
            onChange={handleChange}
            name="salaryBrut"
            id="salary-input"
            InputProps={{
              inputComponent: SalaryBrutInput,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.inputBtn}
            onClick={calculate}
          >
            Calculer
          </Button>
          <img
            className={classes.inputImg}
            src="/images/worker.svg"
            alt="Employé"
          ></img>
        </div>
      </Grid>
      <Grid item xs={12}>
        <SalaryNetResult values={values}></SalaryNetResult>
      </Grid>
      <Grid item xs={12}>
        <TableSummary values={values}></TableSummary>
      </Grid>
      <Grid item xs={12}>
        <Alert severity="info" variant="outlined" className={classes.alert}>
          Ces montants sont donnés à titre indicatif. Ces taux sont susceptibles
          de changer à tout moment. Pour consulter les derniers taux en vigueur,
          veuillez consulter le site officiel de la Sécurité sociale en
          Nouvelle-Calédonie (
          <a
            href="https://www.cafat.nc/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.cafat.nc/
          </a>
          ). <b>Salaire.nc</b> ne peut être tenu responsable d'éventuelles
          erreurs de calcul.
        </Alert>
      </Grid>
      <hr />
      <Grid item xs={12}>
        <MinimumSalary></MinimumSalary>
      </Grid>
      <hr />
      <Grid item xs={12}>
        <AverageSalary></AverageSalary>
      </Grid>
    </Grid>
  );
};

export default Main;
