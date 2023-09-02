import React from 'react';
import { Grid } from '@mui/material';
import { ReactComponent as Facebook } from '../../../../../../assets/svgs/facebook-round.svg';
import { ReactComponent as Instagram } from '../../../../../../assets/svgs/instagram-round.svg';
import { ReactComponent as LinkedIn } from '../../../../../../assets/svgs/linkedin-round.svg';
import { ReactComponent as Line } from '../../../../../../assets/svgs/vertical-line.svg';
import { ReactComponent as Follow } from '../../../../../../assets/svgs/follow-us.svg';
import styles from './FollowUs.module.scss';

const FollowUs = () => {
  return (
    <Grid className={styles.followContainer} container>
      <Grid id={styles.itemsContainer} item>
        <Follow />
        <Line className={styles.verticalLine} />
        <Facebook className={styles.socialIcon} />
        <Instagram className={styles.socialIcon} />
        <LinkedIn className={styles.socialIcon} />
      </Grid>
    </Grid>
  );
};

export default FollowUs;
