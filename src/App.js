import React from 'react';
import './App.css';
import 'tachyons';
import ScrollToTop from './components/ScrollToTop';


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
