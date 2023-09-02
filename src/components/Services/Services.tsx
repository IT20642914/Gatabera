import React from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router';
import ProductEngineering from './components/ProductEngineering/ProductEngineering';

const Services = () => {
  const location = useLocation();
  const path = location.pathname; // get the current path from the location object
  const parts = path.split('/'); // split the path into an array of parts
  const servicesPart = parts[2];

  return (
    <Grid container>
      <ProductEngineering />
    </Grid>
  );
};

export default Services;
