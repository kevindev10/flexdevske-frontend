import React from 'react';
import './App.css';
import 'tachyons';
import ScrollToTop from './components/ScrollToTop';
import {Helmet} from "react-helmet";


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import OurWork from './components/OurWork/OurWork'

class App extends React.Component {
  // componentDidMount(){
  //   fetch ('http://localhost:3001/')
  //     .then(response=>response.json())
  //     .then(data=>console.log(data))
  // }
  render(){
    return (
      <Router>
        <ScrollToTop/>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Flex DevsKe</title>
                <link rel="canonical" href="https://www.flexdevske.co.ke/" />
                <meta name="description" content="Web design and development in Nairobi, Kenya"/>
                <meta name="keywords" content="Web design, Web development, Web designers, Web developers, Website Kenya, Website Nairobi, E-commerce "/>
            </Helmet>
          <Navbar/>
            <Switch>
                <Route exact path='/'>
                  <Home/>
                </Route>
                <Route  path='/contact'>
                  <Contact/>
                </Route>
                <Route  path='/our-work'>
                  <OurWork/>
                </Route>

                
           </Switch>

      </Router>
      
     
    );
  }
  
}

export default App;
