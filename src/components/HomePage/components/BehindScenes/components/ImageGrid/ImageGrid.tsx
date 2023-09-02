import React, { FC } from 'react';
import { Grid } from '@mui/material';
import ImagePlaceholder from '../../../../../../assets/imgs/empty-image.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './ImageGrid.module.scss';

type IGallery = {
  gallery: string[];
};

const ImageGrid: FC<IGallery> = ({ gallery }) => {
  return (
    <Grid container>
      <Grid md={4} item>
        <LazyLoadImage
          className={styles.sectionOneImg}
          alt='img'
          src={gallery[0] || ImagePlaceholder}
        />
      </Grid>
      <Grid md={4} item>
        <Grid md={12} item>
          <LazyLoadImage
            className={styles.sectionTwoTopImg}
            alt='img'
            src={gallery[1] || ImagePlaceholder}
          />
        </Grid>
        <Grid sx={{ display: 'flex' }} item>
          <Grid md={6} item>
            <LazyLoadImage
              className={styles.sectionTwoBottomImg}
              alt='img'
              src={gallery[2] || ImagePlaceholder}
            />
          </Grid>
          <Grid md={6} item>
            <LazyLoadImage
              className={styles.sectionTwoBottomImg}
              alt='img'
              src={gallery[3] || ImagePlaceholder}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid md={4} item>
        <Grid md={12} item>
          <LazyLoadImage
            className={styles.sectionThreeTopImg}
            alt='img'
            src={gallery[4] || ImagePlaceholder}
          />
        </Grid>
        <Grid md={12} item>
          <LazyLoadImage
            className={styles.sectionThreeBottomImg}
            alt='img'
            src={gallery[5] || ImagePlaceholder}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageGrid;
