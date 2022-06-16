import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  test('Render del componente Footer', () => {
    const footer = shallow(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
