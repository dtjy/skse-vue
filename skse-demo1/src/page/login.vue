<template>
  <div id="login_main">
    <div class="login" id="login">
      <a-form :form="form" id="form1">
        <a-form-item
          id="codeafi"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="账号"
        >
          <a-input
            v-decorator="[
              'username',
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
              'nickname',
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
          <a-checkbox :checked="checkNick" @change="handleChange">
            都 is required
          </a-checkbox>
        </a-form-item>

        <a-form-item
          :label-col="formTailLayout.labelCol"
          :wrapper-col="formTailLayout.wrapperCol"
        >
          <a-button type="primary" @click="check"> Check </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4,offset:4 },
  wrapperCol: { span: 10 },
};
const formItemLayout2 = {
  labelCol: { span: 4,offset:4 },
  wrapperCol: { span: 10 },
};
const formTailLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8, offset: 6 },
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      formItemLayout2,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
    };
  },
  methods: {
    check() {
      this.form.validateFields((err) => {
        if (!err) {
          console.info("success");
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
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
</style>