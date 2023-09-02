import { Grid } from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typography from '../../../common/Typography/Typography';
import styles from './Banner.module.scss';
import HoneyComb from '../../../../assets/svgs/honey-comb.svg';

import ScrollDown from './components/ScrollDown/ScrollDown';
import FollowUs from './components/FollowUs/FollowUs';
import Button from '../../../common/Button/Button';
import DigiratinaGroup from '../../../../assets/imgs/digiratina_group.jpg';

const Banner = () => {
  return (
    <Grid className={styles.bannerContainer} container>
      <LazyLoadImage className={styles.honeyComb} alt='honey-comb' src={HoneyComb} />
      <FollowUs />
      <Grid className={styles.headersContainer} sx={{ textAlign: 'center' }} item>
        <Typography variant='h3' className={styles.bannerHeader}>
          Join with{'\u00A0'}
          <span className={styles.digiratinaWord}>Digiratinions</span>
        </Typography>

        <Typography
          sx={{ fontWeight: 400, textAlign: 'center' }}
          className={styles.subHeader}
          variant='subtitle1'
        >
          Our creative and innovative workplace didn’t just happen. It’s the talent we’ve attracted
          over the years and the experience and expertise they’ve brought into our offices across
          the world.
        </Typography>
        <Button className={styles.viewOpeningBtn}>
          <Typography
            sx={{ fontWeight: 400, textAlign: 'center', fontSize: { md: '1rem', lg: '1rem' } }}
            variant='subtitle1'
          >
            View Openings
          </Typography>
        </Button>
      </Grid>

      <LazyLoadImage
        className={styles.DigiratinaGroup}
        alt='digiratina-group'
        src={DigiratinaGroup}
      />

      <ScrollDown />
    </Grid>
  );
};

export default Banner;
