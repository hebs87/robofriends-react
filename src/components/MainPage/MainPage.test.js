import {shallow} from 'enzyme';
import MainPage from "../../containers/App";

describe('App component test suite', () => {
  it('expect to render App component', () => {
    // Mock the connected state from the redux store
    const mockStore = {
      robots: [],
      searchTerm: '',
    }
    expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot();
  });
});
