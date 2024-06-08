import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const APP_ID = "ddc6ac99";
  const APP_KEY = "15d5a27f0fa77238a387d07e5a8846e4";

  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`)
      .then(response => response.json())
      .then(data => setData(data.hits));
  };

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="app-container">
      <center>
        
        <br/>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router><br/>
        <h2>FOOD RECIPE APP</h2><br />
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter your recipe"
            onChange={handleInputChange}
            className="input-field"
          /><br />
          <input
            type="submit"
            value="Search"
            className="submit-button"
          />
        </form>
        <div className="recipes">
          {data.length > 0 && data.map((item, index) => (
            <Product key={index} recipe={item.recipe} />
          ))}
        </div>
      </center>
    </div>
  );
};

export default App;
