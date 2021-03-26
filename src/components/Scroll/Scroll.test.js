import {shallow} from 'enzyme';
import Scroll from "./Scroll";

describe('Scroll component test suite', () => {
  it('expect to render Scroll component', () => {
    // shallow renders just the target component and not any nest components that are rendered within it
    // toMatchSnapshot() takes a snapshot of the component and tests it is rendering as it should - any change to the
    // component will then cause the test to fail, as it will no longer match the snapshot
    expect(shallow(<Scroll children/>)).toMatchSnapshot();
  });
});
