import React, { FunctionComponent, SVGProps } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import styles from './Clients.module.scss';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import Slider from 'react-slick';
import { feTechs } from '../../../../constants/constants';

const Clients = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const settings = {
    className: styles.slider,
    slidesToShow: isSmallScreen ? 3 : 5,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Grid id={styles.clientsContainer} container>
      <Grid xs={12} md={12} id={styles.titleContainer} sx={{ mb: 10 }} item>
        <SectionTitle title='Our Clients' subTitle='Lorem ipsum dolor sit' isMain />
      </Grid>
      <Grid id={styles.slideContainer} container>
        <Slider {...settings}>
          {feTechs.map((Tech: FunctionComponent<SVGProps<SVGSVGElement>>, index: number) => (
            // <Grid key={index} xs={3} item>
            <Tech key={index} />
            // </Grid>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Clients;
