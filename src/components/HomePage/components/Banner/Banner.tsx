import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import styles from './Banner.module.scss';
import Typography from '../../../common/Typography/Typography';
import HoneyComb from '../../../../assets/svgs/honey-comb.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FollowUs from './components/FollowUs/FollowUs';
import ScrollDown from './components/ScrollDown/ScrollDown';

const Banner = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'));
  return (
    <Grid className={styles.bannerContainer} container>
      <LazyLoadImage className={styles.honeyComb} alt='honey-comb' src={HoneyComb} />
      {isMediumScreen && <FollowUs />}
      <Grid className={styles.headersContainer} item>
        <Typography
          id={styles.bannerTitle}
          color='primary.light'
          variant={isSmallScreen ? 'subtitle2' : 'h1'}
        >
          Trusted Technology Partner Bringing
        </Typography>
        <Typography
          id={styles.boldBannerTitle}
          sx={{ fontWeight: 600 }}
          color='primary.light'
          variant={isSmallScreen ? 'subtitle2' : 'h1'}
        >
          Innovative Customized Solutions
        </Typography>
        <Typography id={styles.subHeader} color='primary.light' variant='subtitle1'>
          We are the elite of digital transformation professionals providing Software Engineering
          services
        </Typography>
      </Grid>
      {isMediumScreen && <ScrollDown />}
    </Grid>
  );
};

export default Banner;
