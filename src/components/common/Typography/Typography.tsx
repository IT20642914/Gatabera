import { SxProps } from '@mui/material/styles';
import React, { FC, ReactNode } from 'react';
import { StyledTypography } from './styled';

interface ITypographyProps {
  children: ReactNode;
  color?: string;
  variant?: string;
  sx?: SxProps;
  id?: string;
  className?: string;
  onClick?: () => void;
  component?: string;
}

const Typography: FC<ITypographyProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledTypography {...rest}>{children}</StyledTypography>;
};

export default Typography;
