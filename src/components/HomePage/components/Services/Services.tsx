import React, { FunctionComponent, SVGProps, useState } from 'react';
import cx from 'classnames';
import { Grid, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import styles from './Services.module.scss';
import { services } from '../../../../constants/constants';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import Typography from '../../../common/Typography/Typography';

type IServices = {
  key: number;
  name: string;
  description: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

const Services = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const [allServices] = useState<Array<IServices>>(services);

  const settings = {
    className: isSmallScreen ? styles.smallScreenSlider : styles.slider,
    slidesToShow: isSmallScreen ? 1 : 5,
    slidesToScroll: 1,
    swipeToSlide: false,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    touchMove: false,
  };

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(4);

  const changeCardPositionIndexes = (oldI: number, newI: number) => {
    if (!isSmallScreen) {
      setLeft(newI);
      if (newI > 6) {
        if (newI === 7) setRight(0);
        if (newI === 8) setRight(1);
        if (newI === 9) setRight(2);
        if (newI === 10) setRight(3);
      } else {
        setRight(newI + 4);
      }
    }
  };

  return (
    <Grid id={styles.servicesContainer} container>
      <Grid xs={12} md={12} id={styles.titleContainer} sx={{ mb: 10 }} item>
        <SectionTitle title='What We Do' subTitle='OUR SERVICES' isMain />
      </Grid>
      <Grid justifyContent='center' container>
        <Slider beforeChange={(oldI, newI) => changeCardPositionIndexes(oldI, newI)} {...settings}>
          {allServices.map((service: IServices, index) => (
            <Grid key={service.key} item>
              <div
                key={service.key}
                className={
                  !isSmallScreen
                    ? cx(
                        index === left || index === right
                          ? styles.smallServiceCard
                          : styles.serviceCard,
                        index === left && styles.left,
                        index === right && styles.right,
                      )
                    : styles.serviceCard
                }
              >
                <service.icon className={styles.carbonIcon} />
                <Typography
                  id={styles.serviceTitle}
                  sx={{ mb: 6, fontWeight: 600 }}
                  variant='h5'
                  color='primary.dark'
                >
                  {service.name}
                </Typography>``
                <Typography id={styles.serviceDesc} sx={{ fontWeight: 500 }} color='primary.dark'>
                  {service.description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Services;
