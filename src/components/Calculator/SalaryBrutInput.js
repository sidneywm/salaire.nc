import React from 'react';
import NumberFormat from 'react-number-format';

const SalaryBrutInput = (props) => {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator={' '}
      decimalSeparator={','}
    />
  );
};

export default SalaryBrutInput;
