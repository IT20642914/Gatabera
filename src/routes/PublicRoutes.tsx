import React, { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Footer, Header } from '../components';

const PublicRoute = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default PublicRoute;
