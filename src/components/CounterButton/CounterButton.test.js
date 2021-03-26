import {shallow} from 'enzyme';
import CounterButton from "./CounterButton";

describe('CounterButton component test suite', () => {
  it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    // shallow renders just the target component and not any nest components that are rendered within it
    // toMatchSnapshot() takes a snapshot of the component and tests it is rendering as it should - any change to the
    // component will then cause the test to fail, as it will no longer match the snapshot
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    // Get the element in the component by id, so we can simulate intended action (click in this instance)
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 1});
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 3});
    // No keypress event in the component so this should not change the state
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({count: 3});
    // We can also check particular props
    expect(wrapper.props().color).toEqual('red');
  });
});
