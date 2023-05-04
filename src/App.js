import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState, useEffect } from "react";

import NavBar from './components/NavBar'
import Home from './components/Home';
import Events from './components/Events';
import SearchResults from "./components/SearchResults";

import logo from './logo.svg';
import './App.css';

const apiURL = "http://localhost:3001/tickets"

function App() {

  const [tickets, setTickets] = useState([])
  const [searchResults, setSearchResults] = useState([]);

    // 3. Create out useEffect function
  useEffect(() => {
    fetch(apiURL)
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setTickets(data))
  },[])


  return (
    <div>
      <NavBar tickets={tickets} setSearchResults={setSearchResults}/>     
       <Routes>
          <Route path="/" element={<Home tickets={tickets} setTickets={setTickets }/>} />
          <Route path="/events" element={<Events />} />
          <Route path="/search" element={<SearchResults searchResults={searchResults} setTickets={setTickets}/>} />
       </Routes>
  
    </div>
  );
}

export default App;
