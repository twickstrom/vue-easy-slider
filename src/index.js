import Slider from './slider.vue'
import SliderItem from './slider-item.vue'

const plugin = {
  install(app) {
    app.component(Slider.name, Slider)
    app.component(SliderItem.name, SliderItem)
  },
}

export { Slider, SliderItem }
export default plugin
