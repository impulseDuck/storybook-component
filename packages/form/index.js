import zForm from './src/form.vue'

zForm.install = Vue => {
  Vue.component(zForm.name, zForm)
}

export default zForm