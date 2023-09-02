import React, { FC, FunctionComponent, SVGProps } from 'react';
import { Grid } from '@mui/material';
import Typography from '../../../common/Typography/Typography';
import styles from './ImageTitle.module.scss';
import HoneyCombWhite from '../../../../assets/svgs/honey-comb-white.svg';
import { ReactComponent as Arrows } from '../../../../assets/svgs/frame-arrows.svg';
import { ReactComponent as Wave } from '../../../../assets/svgs/frame-wave.svg';
import Button from '../../../common/Button/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

type IImageTitleProps = {
  title: string;
  subTitle: string;
  desc: string;
  sectionImage: FunctionComponent<SVGProps<SVGSVGElement>>;
};

const ImageTitle: FC<IImageTitleProps> = ({ title, subTitle, desc, sectionImage }) => {
  const isMediumScreen = useMediaQuery((theme: any) => theme.breakpoints.down('xl'));

  const SectionImage = sectionImage;
  return (
    <Grid
      sx={{
        background: `url(${HoneyCombWhite}) no-repeat center -15rem`,
        backgroundSize: 'cover',
        position: 'relative',
        mb: 10,
      }}
      id={styles.imageTitleSection}
      container
    >
      <Grid md={6} item>
        <Typography
          className={styles.title}
          sx={{ pt: 10, fontWeight: 600 }}
          variant={isMediumScreen ? 'h2' : 'h1'}
        >
          {title}
        </Typography>
        <Typography
          sx={{ mt: 1, mb: 8 }}
          variant={isMediumScreen ? 'subtitle2' : 'subtitle1'}
          color='secondary.main'
        >
          {subTitle}
        </Typography>
        <Typography sx={{}} variant={isMediumScreen ? 'body2' : 'body1'} color='primary.main'>
          {desc}
        </Typography>
        <Button sx={{ px: 14, background: '#00499D', mt: 8 }} variant='contained'>
          Contact Us
        </Button>
      </Grid>
      <Grid md={6} item>
        <div className={styles.borderImageContainer}>
          <Arrows id={styles.arrows} />
          <Wave id={styles.wave} />
        </div>
        {/* <SectionImage className={styles.sectionImage} /> */}
      </Grid>
    </Grid>
  );
};

export default ImageTitle;
