import countryReducer, { fetchCountries, showCountry } from '../redux/Country/countrySlice';

const countryObj = {
  name: {
    common: 'Netherlands',
    official: 'Kingdom of the Netherlands',
  },
  capital: [
    'Amsterdam',
  ],
  region: 'Europe',
  subregion: 'Western Europe',
  languages: {
    nld: 'Dutch',
  },
  area: 41850,
  flag: '🇳🇱',
  maps: {
    googleMaps: 'https://goo.gl/maps/Hv6zQswGhFxoVVBm6',
  },
  population: 16655799,
  timezones: [
    'UTC-04:00',
    'UTC+01:00',
  ],
  continents: [
    'Europe',
  ],
  flags: {
    png: 'https://flagcdn.com/w320/nl.png',
  },
};

describe('countrySlice reducer', () => {
  it('should handle fetchCountries.pending', () => {
    const initialState = { isLoading: false };
    const nextState = countryReducer(initialState, fetchCountries.pending());
    expect(nextState.isLoading).toBe(true);
  });

  it('should handle fetchCountries.fulfilled', () => {
    const initialState = { isLoading: true, countries: [] };
    const countriesData = [countryObj];
    const nextState = countryReducer(initialState, fetchCountries.fulfilled(countriesData));
    expect(nextState.isLoading).toBe(false);
    expect(nextState.countries).toEqual(countriesData);
  });

  it('should handle showCountry.pending', () => {
    const initialState = { isLoading: false };
    const nextState = countryReducer(initialState, showCountry.pending());
    expect(nextState.isLoading).toBe(true);
  });

  it('should handle showCountry.fulfilled', () => {
    const initialState = { isLoading: true, countryInfo: [] };
    const countryInfoData = countryObj;
    const nextState = countryReducer(initialState, showCountry.fulfilled(countryInfoData));
    expect(nextState.isLoading).toBe(false);
    expect(nextState.countryInfo).toEqual(countryInfoData);
  });
});
