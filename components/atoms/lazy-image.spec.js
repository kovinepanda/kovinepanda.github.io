import { mount } from "@vue/test-utils";
import LazyImage from './lazy-image';

describe('LazyImage', () => {
    it('renders correctly', () => {
        const blackPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
        const wrapper = mount(LazyImage, {
            propsData: {
                src: blackPixel,
                alt: 'black pixel'
            }
        })
        expect(wrapper.element).toMatchSnapshot()
      })
})
