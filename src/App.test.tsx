
import App from './App';
import { shallow } from 'enzyme';
import UserList from './components/UserList/user-list';
import renderer from 'react-test-renderer';

describe('Parent Component', () => {
  it('renders Child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<UserList />)).toEqual(true);
  });

  it('should render userlist on load', async () => {
    const elem = renderer.create(<App />).toJSON();
    expect(elem).toMatchSnapshot();
 });
});

