import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Showcountry from '../components/CountryInfo';

describe('test if country info renders correctly', () => {
  test('country info snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Showcountry />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
