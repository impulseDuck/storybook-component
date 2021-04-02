<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'zInput',
  // 禁用父组件传来的属性
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput (event) {
      console.log(event.target.value, 'value');
      this.$emit('input', event.target.value)
      const findParent = parent => {
        while(parent){
          if(parent.$options.name === 'zformItem'){
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if(parent){
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style>

</style>