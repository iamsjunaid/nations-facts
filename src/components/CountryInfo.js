import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BiArrowBack } from 'react-icons/bi';
import { showCountry } from '../redux/Country/countrySlice';
import '../styles/CountryInfo.css';

function CountryInfo() {
  const { countryInfo, isLoading } = useSelector((store) => store.country);
  const dispatch = useDispatch();
  const { countryCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showCountry(countryCode));
  }, [dispatch, countryCode]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      {countryInfo.map((country) => (
        <div className="country-container" key={country.cca3}>
          <div className="name-backkey-container">
            <BiArrowBack
              className="icons"
              onClick={() => navigate('/')}
            />
          </div>
          <ul className="country-info">
            <img className="country-flag" src={country.flags.png} alt="flag" />
            <h2>{country.name.official}</h2>
            <li className="list-item">
              <span className="title">Capital</span>
              <span className="description">{country.capital}</span>
            </li>
            <li className="list-item">
              <span className="title">Map</span>
              <a href={country.maps.googleMaps} className="description">
                Country map
              </a>
            </li>
            <li className="list-item">
              <span className="title">Region</span>
              <span className="description">{country.region}</span>
            </li>
            <li className="list-item">
              <span className="title">Population</span>
              <span className="description">{country.population}</span>
            </li>
            <li className="list-item">
              <span className="title">Timezone</span>
              <span className="description">{country.timezones[0]}</span>
            </li>
            <li className="list-item">
              <span className="title">Languages</span>
              <div className="language">
                {Object.keys(country.languages)
                  .map((lang) => country.languages[lang])
                  .map((lang) => (
                    <span key={uuidv4()} className="description lang">
                      {lang}
                      &nbsp;
                    </span>
                  ))}
              </div>
            </li>
            <li className="list-item">
              <span className="title">Area</span>
              <span className="description">
                {country.area}
                km²
              </span>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default CountryInfo;
