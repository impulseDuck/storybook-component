import zSteps from './src/steps'

zSteps.install = Vue => {
  Vue.component(zSteps.name, zSteps)
}

export default zSteps