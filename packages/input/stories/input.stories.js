import zInput from '../'

export default {
  title: 'zInput',
  component: zInput
}

export const Text = () => ({
  components: { zInput },
  template: '<z-input v-model="value"></z-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { zInput },
  template: '<z-input v-model="value" type="password"></z-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})