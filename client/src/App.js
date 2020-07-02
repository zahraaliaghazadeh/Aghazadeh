// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

// ==============================

// to use hooks /functional components instead of classes
import React,{useState,useEffect} from 'react';
// for routes in React
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// importing pages
import ProductsPage from "./pages/ProductsPage";
import RequestServicePage from "./pages/RequestServicePage"
import ServiceDeptPage from "./pages/ServiceDeptPage"
import SignUpPage from "./pages/SignUpPage";
import SplashPage from './pages/SplashPage';

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
      {/* <Navbar /> */}
      
      <Switch>
        <Route exact path="/">
          <SplashPage />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/request">
          <RequestServicePage/>
        </Route>
        
        <Route exact path="/services">
          < ServiceDeptPage />
        </Route>
       
        <Route exact path="/signup">
          <SignUpPage/>
        </Route>
        
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
