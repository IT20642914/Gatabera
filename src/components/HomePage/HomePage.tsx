import React from 'react';
import Grid from '@mui/material/Grid';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Clients from './components/Clients/Clients';
import Tools from './components/Tools/Tools';
import BehindScenes from './components/BehindScenes/BehindScenes';
import GetInTouch from './components/GetInTouch/GetInTouch';
import styles from './HomePage.module.scss'
const HomePage = () => {
  return (
    <Grid className={styles.container} container >
      <Banner />
      <Services />
      <CaseStudies />
      <Clients />
      {/* <Tools /> */}
      <BehindScenes />
      <GetInTouch />
    </Grid>
  );
};

export default HomePage;
