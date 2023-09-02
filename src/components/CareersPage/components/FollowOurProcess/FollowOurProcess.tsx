import { Grid } from '@mui/material';
import React from 'react';
import Typography from '../../../common/Typography/Typography';
import styles from './FollowOurProcess.module.scss';

const FollowOurProcess = () => {
  return (
    <Grid className={styles.FollowOurProcessContainer} container>
      <Grid className={styles.headersContainer} sx={{ textAlign: 'left' }} item>
        <Typography variant='subtitle1' className={styles.bannerHeader}>
          FOLLOW OUR PROCESS
        </Typography>

        <Typography
          sx={{ fontWeight: 600, textAlign: 'left' }}
          className={styles.subHeaderInterview}
          variant='h4'
        >
          Interview Process
        </Typography>
        <Typography
          sx={{ fontWeight: 400, textAlign: 'center' }}
          className={styles.subDesciptionInterview}
          variant='subtitle1'
        >
          We have built a simple and consistent 4 step process to evaluate whether Digiratina is the
          right fit for you and vise versa. All you have to do to ace an interview here at
          Digiratina is to bring your best self to the interview!
        </Typography>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default FollowOurProcess;
