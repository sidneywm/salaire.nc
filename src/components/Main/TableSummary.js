import React from 'react';

import { rates } from '../../common/constants';
import { formatNumbers } from '../../common/utils';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  row: {
    '& > tr:last-child > .MuiTableCell-root': {
      borderBottom: 'none',
    },
  },
});

const createData = (nom, taux, montant) => {
  return { nom, taux, montant };
};

const TableSummary = (props) => {
  const classes = useStyles();
  const {
    ruamm,
    retraite,
    chomage,
    ccs,
    retraiteAgircArrco,
    ceg,
  } = props.values;

  const rows = [
    createData('RUAMM Tranche 1', rates.ruamm.tranche1, ruamm.tranche1),
    ...(ruamm.tranche2
      ? [createData('RUAMM Tranche 2', rates.ruamm.tranche2, ruamm.tranche2)]
      : []),
    createData('Retraite', rates.retraite, retraite),
    createData('Chômage', rates.chomage, chomage),
    createData('CCS (Contribution Calédonienne de solidarité)', rates.ccs, ccs),
    createData(
      'Retraite Agirc-Arrco Tranche 1',
      rates.retraiteAgircArrco.tranche1,
      retraiteAgircArrco.tranche1
    ),
    ...(retraiteAgircArrco.tranche2
      ? [
          createData(
            'Retraite Agirc-Arrco Tranche 2',
            rates.retraiteAgircArrco.tranche2,
            retraiteAgircArrco.tranche2
          ),
        ]
      : []),
    createData("CEG (Contribution d'équilibre général)", rates.ceg, ceg),
  ];

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table className={classes.table} aria-label="cotisations-salariales">
        <TableHead>
          <TableRow>
            <TableCell>Cotisations salariales</TableCell>
            <TableCell align="center">Taux (%)</TableCell>
            <TableCell align="center">Montants (FCFP)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.row}>
          {rows.map((row) => (
            <TableRow key={row.nom}>
              <TableCell component="th" scope="row">
                {row.nom}
              </TableCell>
              <TableCell align="center">{row.taux * 100}</TableCell>
              <TableCell align="center">{formatNumbers(row.montant)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSummary;
