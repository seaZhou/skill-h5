<template>
  <div class="login-account">
    <nut-form ref="ruleForm" :model-value="formData">
      <nut-form-item required prop="username" :rules="[{ required: true, message: '请输入用户名' }]">
        <input v-model="formData.username" class="nut-input-text" placeholder="请输入用户名" type="text" />
      </nut-form-item>
      <nut-form-item required prop="password" :rules="[{ required: true, message: '请填写联系电话' }]">
        <input v-model="formData.password" class="nut-input-text" placeholder="请输入密码" type="password" />
      </nut-form-item>
      <div class="info">
        <nut-icon size="10px" name="check-normal" color="#D9D9D9" />
        我已阅读并同意 <span>《用户协议》</span>、 <span>隐私政策</span>、 <span>儿童守护协议</span>和
        <span>儿童个人 信息保护规则</span>
      </div>
      <nut-button block type="default" @click="submit"> 登录 </nut-button>
      <div class="forget-password">忘记密码？</div>
    </nut-form>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { useUserStore } from '/@/store/modules/user/user';
  const userStore = useUserStore();
  const formData = reactive({
    username: '',
    password: '',
  });
  const ruleForm = ref<any>(null);
  const submit = () => {
    ruleForm.value?.validate().then(({ valid, errors }: any) => {
      console.log(formData, 'formData');

      if (valid) {
        // 登录逻辑
        userStore.login({ username: formData.username, password: formData.password });
      } else {
        console.log(errors);
      }
    });
  };
</script>
<style lang="scss" scoped>
  .login-account {
    .nut-form-item {
      background: #f6f6f6;
      border-radius: 10px;
      margin-bottom: 10px;

      input {
        background: transparent;
        color: #999999;
      }
    }
    .forget-password {
      font-size: 13px;
      color: #438afe;
      text-align: center;
      padding: 15px 0 75px;
    }
    .info {
      padding: 0 0 20px;
      color: #d4d4d4;
      font-size: 10px;
      > span {
        color: #438afe;
      }
    }
    .nut-button--round {
      border-radius: 10px;
      opacity: 0.6;
      border: 1px solid #dddfe6;
    }
  }
</style>
