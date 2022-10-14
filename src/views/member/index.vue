<template>
  <div class="avatar-wrap">
    <nut-avatar
      class="avatar"
      size="large"
      icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
    />
    <div class="member-detail">
      <p class="nickname"> 昵称<nut-button shape="square" size="small" type="default" @click="goLogin"> 去登录 </nut-button> </p>
      <p class="info"> 个人其他信息，后续补充.... </p>
    </div>
  </div>
  <nut-cell-group>
    <nut-cell is-link>
      <template #title>
        <span class="iconfont icon-shu">我的学习</span>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <span class="iconfont icon-zhuanye">我的专业</span>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <span class="iconfont icon-dingdan">我的订单</span>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <span class="iconfont icon-a-weibiaoti-1_huaban1fuben41">毕业管理</span>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <span class="iconfont icon-kaoshianpai">考次管理</span>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <span class="iconfont icon-kefu">客服/帮助</span>
      </template>
    </nut-cell>
  </nut-cell-group>
</template>

<script lang="ts" setup name="MemberPage">
  // import { useUserStore } from '@/store/modules/user';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  // const userStore = useUserStore();
  // const getUserInfo = computed(() => {
  //   const { name = '' } = userStore.getUserInfo || {};
  //   return name;
  // });
  const goLogin = () => {
    router.push('/login');
  };
</script>

<style lang="scss">
  .avatar-wrap {
    display: flex;
    margin: 0 10px 40px;
    align-items: center;
    .member-detail {
      margin-left: 20px;
      .nickname {
        font-size: 16px;
        font-weight: bold;
        .nut-button {
          margin-left: 10px;
        }
      }
      .info {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
</style>
