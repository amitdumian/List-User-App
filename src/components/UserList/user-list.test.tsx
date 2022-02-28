
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserList from "./user-list";
Enzyme.configure({adapter: new Adapter()});
const userJson = require('./user-mock.json');
import renderer from 'react-test-renderer';


describe("Users", () => {
    let wrapper:any;
    
    beforeEach(() => {
        wrapper = shallow(<UserList  />)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
   
    it('Should have proper description after data fetch', async () => {
        expect.assertions(1);
        wrapper.update()
        expect(wrapper.find('.flex-row-container').getElements().length).toEqual(1);
     });

     it('should match snapshot on load', async () => {
        const elem = renderer.create(<UserList />).toJSON();
        expect(elem).toMatchSnapshot();
     });

});