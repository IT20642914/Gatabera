import React, { ChangeEvent, useState, FunctionComponent, SVGProps } from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import LogoBrand from '../../../assets/imgs/logobrand-white.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import { headerNavigations, services } from '../../../constants/constants';

type IServices = {
  key: number;
  name: string;
  description: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

type IHeaderNavigations = {
  key: number;
  name: string;
  path: string;
  selected: boolean;
};

const Footer = () => {
  const [goInput, setGoInput] = useState('');
  return (
    <Grid id={styles.footerContainer} sx={{ bgcolor: 'primary.main', pt: 15 }} container>
      <Grid sx={{ mb: { xs: 5 } }} md={4} item>
        <Grid item>
          <LazyLoadImage effect='blur' className={styles.logo} alt='logo-brand' src={LogoBrand} />
         
        </Grid>
      </Grid>
      <Grid sx={{ mb: { xs: 5 } }} md={6} item>
      {/* <Typography sx={{ mt: 4 }} variant='subtitle2' color='primary.light'>
            Contact us for more details
          </Typography>
          <Grid sx={{ mt: 4 }} md={8} item>
            <InputField
              label=''
              value={goInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setGoInput(e.target.value)}
              sx={{ bgcolor: '#fff' }}
              endAdornment={
                <Button sx={{ borderRadius: '0.625rem' }} variant='contained' color='secondary'>
                  Go
                </Button>
              }
            />
          </Grid> */}



        {/* <Typography sx={{ mt: 4 }} variant='subtitle2' color='primary.light'>
          Our Services
        </Typography>
        <Grid container>
          <Grid md={6} item>
            {services.slice(0, 6).map((service: IServices) => (
              <Typography
                key={service.key}
                className={styles.linkText}
                sx={{ mt: 4, fontWeight: 300 }}
                variant='body2'
                color='primary.light'
              >
                {service.name}
              </Typography>
            ))}
          </Grid>
          <Grid md={6} item>
            {services.slice(6).map((service: IServices) => (
              <Typography
                key={service.key}
                className={styles.linkText}
                sx={{ mt: 4, fontWeight: 300 }}
                variant='body2'
                color='primary.light'
              >
                {service.name}
              </Typography>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
      <Grid sx={{ mb: { xs: 5 } }} md={2} item>
        <Typography sx={{ mt: 4 }} variant='subtitle2' color='primary.light'>
          Quick Links
        </Typography>
        <Grid container>
          <Grid md={12} item>
            {headerNavigations.map((nav: IHeaderNavigations) => (
              <Typography
                key={nav.key}
                className={styles.linkText}
                sx={{ mt: 4, fontWeight: 300 }}
                variant='body2'
                color='primary.light'
              >
                {nav.name}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
