import React from "react";
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link, 
 useParams
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import SearchTitles from './components/SearchTitles';
import Book from './components/Book'

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
         <Route path="/book/:isbn">
           <Book />
         </Route>
         <Route path="/">
           <SearchTitles />
         </Route>
       </Switch>
    </Router>
  )
}