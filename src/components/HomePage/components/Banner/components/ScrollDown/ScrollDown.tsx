import React from 'react';
import { Grid } from '@mui/material';
import { ReactComponent as ScrollDownText } from '../../../../../../assets/svgs/scroll-down.svg';
import { ReactComponent as ArrowDown } from '../../../../../../assets/svgs/down-circle.svg';
import { ReactComponent as Line } from '../../../../../../assets/svgs/vertical-line.svg';
import styles from './ScrollDown.module.scss';

const ScrollDown = () => {
  return (
    <Grid className={styles.scrollContainer} container>
      <Grid id={styles.itemsContainer} item>
        <Grid id={styles.subItemsContainer} item>
          <ScrollDownText />
          <Line className={styles.verticalLine} />
        </Grid>
        <ArrowDown className={styles.arrowIcon} />
      </Grid>
    </Grid>
  );
};

export default ScrollDown;
