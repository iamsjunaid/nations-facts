import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import Country from './Country';
import '../styles/Home.css';

function Home() {
  const { countries, isLoading, error } = useSelector((store) => store.country);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const filtered = countries
    .filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()));

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>An error occured!</div>;
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          value={search}
          className="input-field"
          placeholder="search eg:India"
          onChange={(e) => handleChange(e)}
        />
        <button type="button" className="btn">
          <BiSearch className="bi-search" />
        </button>
      </div>
      <div className="container">
        {filtered.length < 1 && (
          <h2 className="search-error">No results found</h2>
        )}
        {filtered.map((country) => (
          <div
            className="country-card"
            key={country.cca3}
            onClick={() => navigate(`/country/${country.cca3}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                navigate(`/country/${country.cca3}`);
              }
            }}
            tabIndex={0}
            role="button"
          >
            <Country
              name={country.name.common}
              flag={country.flags.png}
              number={country.population}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
