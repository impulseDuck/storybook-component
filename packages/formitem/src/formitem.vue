<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="errmsg">{{errmsg}}</p>
    </div>
  </div>
</template>

<script>
import asyncValidator from 'async-validator'
export default {
  name: 'zFormItem',
  // 注入
  inject: ['form'],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  mounted () {
    this.$on('validate',()=>{
      this.validate()
    })
  },
  data () {
    return {
      // 验证失败显示的文本
      errmsg: ''
    }
  },
  methods: {
    validate () {
      if(!this.prop) return 
      // 验证数据
      const value = this.form.model[this.prop]
      // 验证规则
      const rules = this.form.rules[this.prop]
      // 验证描述信息
      const descriptor = { [this.prop]: rules }
      const validator = new asyncValidator(descriptor)
      return validator.validate({[this.prop]: value}, errors => {
        if (errors) {
          this.errmsg = errors[0].message
        } else {
          this.errmsg = ''
        }
      })
    }
  }
}

</script>

<style>

</style>