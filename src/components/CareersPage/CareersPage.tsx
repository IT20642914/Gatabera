import { Grid } from '@mui/material';
import React from 'react';
import Banner from './components/Banner/Banner';
import FollowOurProcess from './components/FollowOurProcess/FollowOurProcess';

const CareersPage = () => {
  return (
    <Grid container>
      <Banner />
      <FollowOurProcess />
    </Grid>
  );
};

export default CareersPage;
