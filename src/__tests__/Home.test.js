import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Home from '../components/Home';

describe('home', () => {
  it('renders home in a good way', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
  });
});
