import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  countryInfo: [],
  isLoading: false,
  error: undefined,
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      return response.json();
    } catch (error) {
      return error;
    }
  }
);

export const showCountry = createAsyncThunk(
  'countries/showCountry',
  async (code) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        const countries = action.payload.sort((a, b) => {
          const countryA = a.name.common.toLowerCase();
          const countryB = b.name.common.toLowerCase();
          if (countryA < countryB) {
            return -1;
          }
          if (countryA > countryB) {
            return 1;
          }
          return 0;
        });
        state.countries = countries;
      })
      .addCase(showCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countryInfo = action.payload;
      });
  },
});

export default countrySlice.reducer;
