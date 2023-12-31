import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, CareersPage, ScrollToTop, Services, QualityAssuarance } from './components';
import PublicRoute from './routes/PublicRoutes';
import GetInTouch from './components/HomePage/components/GetInTouch/GetInTouch';
import ProductEngineering from './components/Services/components/ProductEngineering/ProductEngineering';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Router>
       <ToastContainer></ToastContainer>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<PublicRoute />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='/services' element={<PublicRoute />}>
          <Route path='product-engineering' element={<ProductEngineering />} />
          <Route path='software-development' element={<Services />} />
          <Route path='quality-assurance' element={<QualityAssuarance />} />
          <Route path='data-analytics' element={<Services />} />
          <Route path='application-services' element={<Services />} />
          <Route path='digital-transformation' element={<Services />} />
          <Route path='iot' element={<Services />} />
          <Route path='mobile-applications' element={<Services />} />
          <Route path='business-consulting' element={<Services />} />
          <Route path='enterprise-resource-planning' element={<Services />} />
          <Route path='telco-industry' element={<Services />} />
        </Route>
        <Route path='/careers' element={<PublicRoute />}>
          <Route path='/careers' element={<CareersPage />} />
        </Route>
        <Route path='/contact' element={<PublicRoute />}>
          <Route path='/contact' element={<GetInTouch />} />
        </Route>
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
