import zButton from './src/button.vue'

zButton.install = Vue => {
  Vue.component(zButton.name, zButton)
}

export default zButton