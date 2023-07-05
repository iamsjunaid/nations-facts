import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';

describe('to see if it navbar renders correctly', () => {
  it('test Navbar', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
  });
});
