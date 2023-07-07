import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchCountries } from './redux/Country/countrySlice';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CountryInfo from './components/CountryInfo';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<CountryInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
