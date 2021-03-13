import {shallow} from 'enzyme';
import MainPage from "./MainPage";

describe('MainPage component test suite', () => {
  // Run this snippet before each test - create mockProps and the wrapper
  let wrapper;
  beforeEach(() => {
    // Create mock props to pass into MainPage component, with mock onRequestRobots function
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>);
  });

  it('expect to render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    // Create new mockProps2 with robots value to test search/filter functionality
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'john',
      isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2}/>);
    // instance() gives us access to all methods in the component
    expect(wrapper2.instance().filteredRobots([])).toEqual([]);
    expect(wrapper2.instance().filteredRobots(mockProps2.robots)).toEqual([{
      id: 1,
      name: 'John',
      email: 'john@gmail.com'
    }]);
  });
});
