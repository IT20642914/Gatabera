import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Typography from '../../../common/Typography/Typography';
import styles from './WhyWorkSection.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TitleDesc from './components/TitleDesc/TitleDesc';

type IImageTitleProps = {
  coverImage: string;
  points: IPoints[];
};

type IPoints = {
  title: string;
  desc: string;
};

const WhyWorkSection: FC<IImageTitleProps> = ({ coverImage, points }) => {
  const isMediumScreen = useMediaQuery((theme: any) => theme.breakpoints.down('xl'));
  return (
    <Grid id={styles.whyWorkContainer} container>
      <Grid sx={{ mb: 14 }} xs={12} item>
        <Typography
          sx={{ fontWeight: 600 }}
          color='primary.main'
          variant={isMediumScreen ? 'h3' : 'h2'}
        >
          Why work with us?
        </Typography>
      </Grid>
      <Grid sx={{ mb: 12 }} md={6} item>
        <div className={styles.borderImageContainer}>
          <LazyLoadImage
            effect='blur'
            className={styles.borderImage}
            alt='alt-cover'
            src={coverImage}
          />
        </div>
      </Grid>
      <Grid md={6} item>
        {points.map((point: IPoints) => (
          <TitleDesc key={point.title} title={point.title} desc={point.desc} />
        ))}
      </Grid>
    </Grid>
  );
};

export default WhyWorkSection;
