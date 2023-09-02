import React, { Fragment, FC } from 'react';
import { SxProps } from '@mui/material';
import Typography from '../Typography/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ITitleSectionProps {
  title: string;
  subTitle: string;
  isMain?: boolean;
  sx?: SxProps;
}

const SectionTitle: FC<ITitleSectionProps> = ({ title, subTitle, isMain, sx }) => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  return (
    <Fragment>
      <Typography
        className='sub-title'
        sx={{ mb: 1, ...sx }}
        color='secondary.main'
        variant={isSmallScreen ? 'subtitle1' : 'h5'}
      >
        {subTitle}
      </Typography>
      <Typography
        className='title'
        sx={{ fontWeight: 600, ...sx }}
        color={isMain ? 'primary.main' : 'primary.light'}
        variant={isSmallScreen ? 'h4' : 'h2'}
      >
        {title}
      </Typography>
    </Fragment>
  );
};

export default SectionTitle;
