import { mount } from "@vue/test-utils";
import Tag from './tag';

describe('Tag', () => {
    it('renders correctly', () => {
        const wrapper = mount(Tag, {
            propsData: {
                slug: 'vue 🤘'
            }
        })
        expect(wrapper.element).toMatchSnapshot()
      })
})
