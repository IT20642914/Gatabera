import React, { useState } from 'react';
import cx from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';
import { Swiper as SwiperType } from 'swiper/types';
import Typography from '../../../common/Typography/Typography';
import { Grid, useMediaQuery } from '@mui/material';
import styles from './CaseStudies.module.scss';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import { slides } from '../../../../constants/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImagePlaceholder from '../../../../assets/imgs/empty-image.png';
import { ReactComponent as Prev } from '../../../../assets/svgs/prev-circle.svg';
import { ReactComponent as Next } from '../../../../assets/svgs/next-circle.svg';

type ISlides = {
  key: number;
  title: string;
  description: string;
  img: string;
  nextClass: string;
  prevClass: string;
};

const CaseStudies = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const [allSlides] = useState<Array<ISlides>>(slides);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <Grid id={styles.caseStudiesContainer} container>
      <Grid xs={12} md={12} id={styles.titleContainer} sx={{ mb: 10 }} item>
        <SectionTitle title='Case Studies' subTitle='A SELECTION OF' />
      </Grid>
      <Swiper
        className={styles.swiper}
        onSlideChange={handleSlideChange}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: '.next-swiper-button',
          prevEl: '.prev-swiper-button',
        }}
      >
        {allSlides.map((slide: ISlides, index: number) => (
          <SwiperSlide key={slide.key} className={styles.swiperSlide}>
            <LazyLoadImage
              className={styles.slideImg}
              effect='blur'
              alt='honey-comb'
              src={slide.img || ImagePlaceholder}
            />
            <Grid
              id={styles.textContainer}
              className={cx(index !== currentIndex && styles.displayNone)}
              item
            >
              <Typography
                color='primary.light'
                sx={{ fontWeight: 500, mt: 4, mb: 2 }}
                variant={isSmallScreen ? 'body1' : 'subtitle1'}
              >
                {slide.title}
              </Typography>
              <div className={styles.navigationArrowContainer}>
                <Prev id={styles.prevIcon} className={cx(slide.prevClass)} />
                <Typography
                  color='primary.light'
                  sx={{ textAlign: 'left' }}
                  variant={isSmallScreen ? 'body2' : 'body1'}
                >
                  {slide.description}
                </Typography>
                <Next id={styles.nextIcon} className={cx(slide.nextClass)} />
              </div>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default CaseStudies;
