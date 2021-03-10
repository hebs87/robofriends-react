import {shallow} from 'enzyme';
import Card from "./Card";

describe('Card component test suite', () => {
  it('expect to render Card component', () => {
    // shallow renders just the target component and not any nest components that are rendered within it
    expect(shallow(<Card/>).length).toEqual(1);
  });
});
