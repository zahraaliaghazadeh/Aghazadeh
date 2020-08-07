// to use hooks /functional components instead of classes
import React from 'react';
// for routes in React
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// importing pages
import ProductsPage from "./pages/ProductsPage";
import RequestServicePage from "./pages/RequestServicePage";
import ServiceDeptPage from "./pages/ServiceDeptPage";
import SignUpPage from "./pages/SignUpPage";
import SplashPage from './pages/SplashPage';
import ContactPage from './pages/ContactPage';
import AdminAddProductPage from "./pages/AdminAddProductPage";
import AboutPage from "./pages/AboutPage";
// import AdminDashboard from "./pages/AdminDashboard"

// importing components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// importing the api routes
import API from "./utils/API"
// the main css file
import './App.css';

function App() {
  return (
    // all the routes
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/request">
          <RequestServicePage />
        </Route>

        <Route exact path="/services">
          < ServiceDeptPage />
        </Route>

        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        {/* <div id="adminContainer"> */}
          <Route exact path="/admin/new">
            <AdminAddProductPage />
          </Route>
          {/* <Route exact path="/admin">
            <AdminDashboard />
          </Route> */}
        {/* </div> */}
        <Route exact path="*">
          <SplashPage />
        </Route>

      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
