import React, { FC } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import Typography from '../../../../../common/Typography/Typography';

type ITitleProps = {
  title: string;
  desc: string;
};

const TitleDesc: FC<ITitleProps> = ({ title, desc }) => {
  const isMediumScreen = useMediaQuery((theme: any) => theme.breakpoints.down('xl'));
  return (
    <Grid sx={{ mb: 10 }} item>
      <Typography
        sx={{ fontWeight: 600 }}
        color='primary.dark'
        variant={isMediumScreen ? 'h6' : 'h5'}
      >
        {title}
      </Typography>
      <Typography color='secondary.dark' variant={isMediumScreen ? 'body2' : 'body1'}>
        {desc}
      </Typography>
    </Grid>
  );
};

export default TitleDesc;
