import { mount } from "@vue/test-utils";
import Avatar from './avatar';

describe('Avatar', () => {
    it('renders a span', () => {
        const wrapper = mount(Avatar, {
            slots: {
                default: '<span></span>'
            }
        })
        
        expect(wrapper.find('span').exists()).toBe(true)
    })
    it('renders correctly', () => {
        const wrapper = mount(Avatar)
        expect(wrapper.element).toMatchSnapshot()
      })
})
