import React from 'react';
import PropType from 'prop-types';
import '../styles/Country.css';

const Country = ({ flag, name, number }) => (
  <div>
    <div className="country">
      <img className="flag" src={flag} alt="flag" />
      <div className="country">
        <h3 className="country-name">{name}</h3>
        <p className="population">
          <span> Total Population:&nbsp;</span>
          {number}
        </p>
      </div>
    </div>
  </div>
);

Country.propTypes = {
  flag: PropType.string,
  name: PropType.string,
  number: PropType.number,
};
Country.defaultProps = {
  flag: null,
  name: null,
  number: null,
};
export default Country;
