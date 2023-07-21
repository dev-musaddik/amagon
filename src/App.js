import React from  'react';
import './App.css';
import Header from './compornets/Header/Header';
import Shop from './compornets/Shop/Shop';
import Review from './compornets/Review/Review';

import {
  BrowserRouter as  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './compornets/Inventory/Inventory';
import Nomatch from './compornets/Nomatch/Nomatch';
import Details from './compornets/Details/Details';




function App() {
  return (
    
    
     <div > 
      {/* <Header></Header> */}
      <Router>
        
        
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
           
          <Route exact path="/">
            <Shop></Shop>
          </Route>
         
          <Route path= "/:productKey/" >
            <Details></Details>
          </Route>
          
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      
      </Router>

 </div>

   
  );
}

export default App;
