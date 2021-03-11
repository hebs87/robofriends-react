import {shallow} from 'enzyme';
import Header from "./Header";

describe('Header component test suite', () => {
  it('expect to render Header component', () => {
    // shallow renders just the target component and not any nest components that are rendered within it
    // toMatchSnapshot() takes a snapshot of the component and tests it is rendering as it should - any change to the
    // component will then cause the test to fail, as it will no longer match the snapshot
    expect(shallow(<Header/>)).toMatchSnapshot();
  });
});
