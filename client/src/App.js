// to use hooks /functional components instead of classes
import React from 'react';
// for routes in React
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// importing pages
import AboutPage from "./pages/AboutPage";
import AdminAddProductPage from "./pages/AdminAddProductPage";
import AdminDashboard from "./pages/AdminDashboard"
import AdminProductInfoPage from './pages/AdminProductInfoPage';
import ContactPage from './pages/ContactPage';
import RequestServicePage from "./pages/RequestServicePage";
import ServiceDeptPage from "./pages/ServiceDeptPage";
import SignUpPage from "./pages/SignUpPage";
import SplashPage from './pages/SplashPage';
<<<<<<< HEAD
import ContactPage from './pages/ContactPage';
import AdminAddProductPage from "./pages/AdminAddProductPage";
import AboutPage from "./pages/AboutPage";
// import AdminDashboard from "./pages/AdminDashboard"
=======
import ProductsPage from "./pages/ProductsPage";
>>>>>>> 9fdc149d2f4ffe74fbf3e607e1bf35d7f1a71116

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
      <div className="container">

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
          <Route exact path="/admin/new">
            <AdminAddProductPage />
          </Route>
          <Route exact path="/admin/product/:id">
            <AdminProductInfoPage />
          </Route>
          <Route exact path="/admin">
            <AdminDashboard />
          </Route>
          <Route exact path="*">
            <SplashPage />
          </Route>

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
