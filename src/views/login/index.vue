<template>
  <div class="login">
    <div class="header">
      <div class="header-l">
        <h2>登录</h2>
        <div>欢迎来到文鼎教育学习平台</div>
      </div>
      <div class="header-r" @click="handleRegister"> 注册 </div>
    </div>
    <login-account />
    <div class="footer">
      <nut-divider :style="{ color: '#BCBCBC', padding: '0 60px', margin: '0' }">其他方式登录</nut-divider>
      <nut-icon name="weixin" />
      <div class="footer-icon">
        <span class="iconfont icon-weixindenglu" style="font-size: 40px; color: #9cda62"></span>
        <span class="iconfont icon-yiliaohangyedeICON-" style="font-size: 40px; color: #addb5d"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LoginAccount from './cnps/login-account.vue';
  import router from '/@/router';
  const handleRegister = () => {
    router.push({ path: '/register' });
  };
</script>

<style scoped lang="scss">
  .login {
    padding: 22px 30px;
    .header {
      display: flex;
      justify-content: space-between;
      color: #666666;
      padding: 0 0 35px;
      .header-l {
        > h2 {
          color: #333333;
          padding: 0 0 5px;
        }
      }
    }
    .footer {
      .footer-icon {
        text-align: center;
        > span:first-child {
          padding: 0 30px 0 0;
        }
      }
    }
  }
</style>
