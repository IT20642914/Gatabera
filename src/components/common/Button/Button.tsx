import React, { FC, ReactNode } from 'react';
import { SxProps } from '@mui/material/styles';
import { StyledButton } from './styles';

interface IButtonProps {
  children: ReactNode;
  color?: string;
  variant?: string;
  sx?: SxProps;
  id?: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
