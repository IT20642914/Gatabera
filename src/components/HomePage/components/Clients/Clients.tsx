import React, { FunctionComponent, SVGProps } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import styles from './Clients.module.scss';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import Slider from 'react-slick';
import { ClientsArry } from '../../../../constants/constants'; // Make sure to use the correct import
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Clients = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const settings = {
    className: styles.slider,
    slidesToShow: isSmallScreen ? 1 : 4,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
  };

  type techtype = {
    key: number;
    img: string;
  };
  console.log('client', ClientsArry[0].img)

  return (
    <Grid id={styles.clientsContainer} container>
      <Grid xs={12} md={12} id={styles.titleContainer} sx={{ mb: 10 }} item>
        <SectionTitle title='Our Clients' subTitle='The customer is very smart' isMain />
      </Grid>
      <Grid id={styles.slideContainer} container>
        {/* <LazyLoadImage key={ClientsArry[0].key} className={styles.honeyComb} alt='honey-comb' src={ClientsArry[0].img} /> */}

        <Slider {...settings}>
          {ClientsArry.map((Tech: techtype) => (
            <Grid key={Tech.key} xs={3} item>
              <LazyLoadImage key={Tech.key} className={styles.honeyComb} alt='honey-comb' src={Tech.img} />
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Clients;
