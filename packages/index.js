import DigitalClock from './src/index.vue';
import Digital from './src/clock-canvas.vue';

const components = [
  DigitalClock,
  Digital
]

export  {
  DigitalClock,
  Digital
}

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
