import zForm from "../";
import zFormItem from "../../formitem";
import zInput from "../../input";
// import zButton from "../../button";

export default {
  title: "zForm",
  component: zForm,
};

export const Login = () => ({
  components: { zForm, zFormItem, zInput },
  template: `<z-form class="form" ref="form" :model="user" :rules="rules">
      <z-form-item label="用户名" prop="username">
        <z-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></z-input>
      </z-form-item>
      <z-form-item label="密码" prop="password">
        <z-input v-model="user.password" placeholder="请输入密码"></z-input>
      </z-form-item>
    </z-form>`,
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码",
          },
        ],
      },
    };
  },
  methods: {
    // 表单验证
    login() {
      console.log("提交", this.$refs.form);
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          alert("验证成功");
        } else {
          alert("验证失败");
          return false;
        }
      });
    },
  },
});
