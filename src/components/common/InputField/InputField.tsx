import React, { FC, useState, ChangeEvent } from 'react';
import { SxProps } from '@mui/material/styles';
import Typography from '../Typography/Typography';
import { StyledInputField } from './styled';
import styles from './InputField.module.scss';

interface IInputFieldProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  endAdornment?: any;
  sx?: SxProps;
  className?: string;
}

const InputField: FC<IInputFieldProps> = (props) => {
  const { value, onChange, label, required, endAdornment, ...rest } = props;

  const [showLabel, setShowLabel] = useState(true);

  const handleOnBlurField = () => {
    if (value !== '') setShowLabel(false);
    else setShowLabel(true);
  };

  return (
    <StyledInputField
      fullWidth
      InputProps={{
        onFocus: () => setShowLabel(false),
        onBlur: handleOnBlurField,
        endAdornment: endAdornment || null,
      }}
      InputLabelProps={{ shrink: false }}
      label={
        showLabel && (
          <Typography variant='body1' component='span' color='info.main'>
            {label}
            {required && <span className={styles.requiredAstrix}> *</span>}
          </Typography>
        )
      }
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default InputField;
