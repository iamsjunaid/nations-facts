import React from 'react';
import PropType from 'prop-types';

const Country = ({ flag, name, number }) => (
  <div>
    <div className="content-country">
      <img className="flag" src={flag} alt="flag" />
      <div className="country-typo">
        <p className="country-name">{name}</p>
        <p className="population">
          {number}
          <span> Pop.</span>
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
