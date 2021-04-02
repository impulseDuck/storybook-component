import zFormitem from './src/formitem'

zFormitem.install = Vue => {
  Vue.component(zFormitem.name, zFormitem)
}

export default zFormitem