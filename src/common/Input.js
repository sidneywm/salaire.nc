import React from 'react';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	inputArea: {
		display: 'flex',
		alignItems: 'center'
	},
	input: {
		width: '27ch',
		height: '36px',
		border: 'none',
		backgroundColor: 'rgba(202, 209, 217, 0.3)',
		borderRadius: '0',
		borderTopRightRadius: '4px',
		borderBottomRightRadius: '4px',
		fontSize: '0.875rem',
		padding: '0 1rem',
		'&:focus': {
			outline: 'none',
			WebkitAppearance: 'none',
			WebkitBoxShadow: '0 0 0 2px rgba(0, 75, 60, 1)',
			boxShadow: '0 0 0 2px rgba(0, 75, 60, 1)',
			borderRadius: '4px'
		},
		[theme.breakpoints.down('sm')]: {
			width: '25ch',
			fontSize: '1rem'
		}
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
			fontSize: '1rem'
		}
	}
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
			/>
		</div>
	);
};

export default Input;
