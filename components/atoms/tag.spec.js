import { mount } from "@vue/test-utils";
import Tag from './tag';

describe('Tag', () => {

    it('renders hashtag before slug', () => {
        const wrapper = mount(Tag, {
            propsData: {
                slug: 'my-hashtag'
            }
        });

        expect(wrapper.text()).toContain('#my-hashtag');        
    })

    it('renders correctly', () => {
        const wrapper = mount(Tag, {
            propsData: {
                slug: 'vue 🤘'
            }
        })

        expect(wrapper.element).toMatchSnapshot()
    })
})
