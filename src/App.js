import React from "react";
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import SearchTitles from './components/SearchTitles';

export default function App() {
  return (
    <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Search Titles</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
      </nav>
      <Switch>
         <Route path="/about">
           <AboutUs />
         </Route>
         <Route path="/">
           <SearchTitles />
         </Route>
       </Switch>
    </Router>
  )
}