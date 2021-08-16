import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/homepage/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
