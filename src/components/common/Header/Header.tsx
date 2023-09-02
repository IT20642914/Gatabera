import React, { useState, useEffect, MouseEvent } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '../Typography/Typography';
import LogoBrand from '../../../assets/imgs/logo-brand.png';
import styles from './Header.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { headerNavigations } from '../../../constants/constants';
import { useLocation, useNavigate } from 'react-router';
import { FiChevronDown } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';

type IHeaderNavigations = {
  key: number;
  name: string;
  path: string;
  selected: boolean;
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'));

  const [currentPath, setCurrentPath] = useState('/');
  const [navigations, setNavigations] = useState<Array<IHeaderNavigations>>(headerNavigations);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    const currentNavigations = headerNavigations.map((nav: IHeaderNavigations) => {
      if (nav.path === currentPath) {
        return {
          ...nav,
          selected: true,
        };
      }

      return {
        ...nav,
        selected: false,
      };
    });

    setNavigations(currentNavigations);
  }, [currentPath]);

  const onNavClick = (path: string) => {
    if (path !== 'services') {
      navigate(path);
    } else {
      // start dropdown
    }
  };

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <Grid className={styles.hiringSection} xs={12} item>
        <Typography color='primary.light'>
        Tharanga Alawala- <u style={{ fontWeight: 500 }}>Traditional Instrument makes</u>
        </Typography>
      </Grid>
      <Grid className={styles.navSection} xs={12} item>
        <Grid item>
          <LazyLoadImage effect='blur' className={styles.logo} alt='logo-brand' src={LogoBrand} />
        </Grid>
        {isMediumScreen && (
          <Grid className={styles.navItems} item>
            {navigations.map((nav: IHeaderNavigations) => (
              <Typography
                key={nav.key}
                color='secondary.dark'
                variant='subtitle1'
                sx={{ mr: nav.key !== 6 ? 8 : 0, fontWeight: nav.selected ? 600 : 400 }}
                className={styles.navText}
                onClick={() => onNavClick(nav.path)}
              >
                {nav.name}
                {nav.name === 'Services' && <FiChevronDown className={styles.downIcon} />}
              </Typography>
            ))}
          </Grid>
        )}
        {isSmallScreen && (
          <Grid item>
            <IconButton
              onClick={openMenu}
              size='small'
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
            >
              <GiHamburgerMenu className={styles.hamburgerIcon} />
            </IconButton>
            <Menu
              id='demo-positioned-menu'
              aria-labelledby='demo-positioned-button'
              anchorEl={anchorEl}
              open={open}
              onClose={closeMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {navigations.map((nav: IHeaderNavigations) => (
                <MenuItem key={nav.key} onClick={() => onNavClick(nav.path)}>
                  <Typography
                    color='secondary.dark'
                    variant='subtitle1'
                    sx={{ mr: nav.key !== 6 ? 8 : 0, fontWeight: nav.selected ? 600 : 400 }}
                    className={styles.navText}
                  >
                    {nav.name}
                    {nav.name === 'Services' && <FiChevronDown className={styles.downIcon} />}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
