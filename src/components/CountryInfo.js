import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BiSolidChevronLeft } from 'react-icons/bi';
import { showCountry } from '../redux/Country/countrySlice';

function CountryInfo() {
  const { countryInfo, isLoading } = useSelector((store) => store.country);
  const dispatch = useDispatch();
  const { countryCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showCountry(countryCode));
  }, [dispatch, countryCode]);

  if (isLoading) {
    return <div>loading.......</div>;
  }

  console.log(countryInfo);
  return (
    <>
      <BiSolidChevronLeft
        className="arrow-back"
        onClick={() => navigate('/')}
      />
      {countryInfo.map((country) => (
        <div className="country-container" key={country.cca3}>
          <h2>{country.name.official}</h2>
          <img className="image-info" src={country.flags.png} alt="flag" />
          <ul>
            <li>
              <span className="title">Capital</span>
              <span className="description">{country.capital}</span>
            </li>
            <li>
              <span className="title">Map</span>
              <a href={country.maps.googleMaps} className="description">
                Country map
              </a>
            </li>
            <li>
              <span className="title">Region</span>
              <span className="description">{country.region}</span>
            </li>
            <li>
              <span className="title">Population</span>
              <span className="description">{country.population}</span>
            </li>
            <li>
              <span className="title">Timezone</span>
              <span className="description">{country.timezones[0]}</span>
            </li>
            <li>
              <span className="title">Languages</span>
              <div className="language">
                {Object.keys(country.languages)
                  .map((lang) => country.languages[lang])
                  .map((lang) => (
                    <span key={uuidv4()} className="description lang">
                      {lang}
                    </span>
                  ))}
              </div>
            </li>
            <li>
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
