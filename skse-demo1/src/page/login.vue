<template>
  <div id="login_main">
    <div class="login" id="login">
      <div id="sys-title">
        <div><a-icon type="dollar" theme="twoTone" />F进入坦克系统</div>
      </div>
      <a-form :form="form" id="form1">
        <a-form-item
          id="codeafi"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="账号"
        >
          <a-input
            v-decorator="[
              'userCode',
              {
                rules: [{ required: true, message: 'Please input your 账号' }],
              },
            ]"
            placeholder="Please input your 账号"
          />
        </a-form-item>
        <a-form-item
          id="pwdafi"
          :label-col="formItemLayout2.labelCol"
          :wrapper-col="formItemLayout2.wrapperCol"
          label="密码"
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your 密码',
                  },
                ],
              },
            ]"
            placeholder="Please input your 密码"
          />
        </a-form-item>

        <a-form-item
          :label-col="formTailLayout.labelCol"
          :wrapper-col="formTailLayout.wrapperCol"
        >
          <a-button type="primary" @click="login"> 登陆 </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const formItemLayout = {
  labelCol: { span: 4, offset: 4 },
  wrapperCol: { span: 10 },
};
const formItemLayout2 = {
  labelCol: { span: 4, offset: 4 },
  wrapperCol: { span: 10 },
};
const formTailLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8, offset: 6 },
};
export default {
  data() {
    return {
      formItemLayout,
      formTailLayout,
      formItemLayout2,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
      userCode: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.userCode = values.userCode;
          this.password = values.password;
          console.log(this.password);
          //登陆接口
          axios
            .post("http://localhost:6990/login/do", {
              userCode: this.userCode,
              password: this.password,
            })
            .then((response) => {
              console.log(response.data);
              this.$router.replace('/index')
            })
            .then(function () {
              console.log(this);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });

      //其他操作
      // console.log(this.userCode)
    },
  },
};
</script>

<style>
#login_main {
  border: 2px solid rgb(34, 71, 194);
  width: 70%;
  height: 100%;
  margin: 10px auto;
  background-color: rgb(110, 212, 190);
}

#login {
  border-radius: 25px;
  border: 2px solid red;
  width: 40%;
  margin: 20% auto;
  /* margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto; */
  background-color: pink;
}

#form1 {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

#codeafi {
  margin: 0 20%;
}

#sys-title {
  /* border: 2px solid white; */
  text-align: center;
  line-height: 40px;
  height: 40px;
  font-size: 40px;
  margin: 20px 0;
}
</style>