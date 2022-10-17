<template>
  <div class="avatar-wrap">
    <nut-avatar
      class="avatar"
      size="large"
      icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
    />
    <div class="member-detail">
      <div class="log-out">
        <h2 class="out-first">未登录</h2>
        <p @click="hanldeLogin" class="out-info">点击登录/注册</p>
      </div>
    </div>
  </div>
  <nut-cell-group>
    <nut-cell is-link>
      <template #title>
        <div><i class="iconfont icon-shu"></i> <span>我的学习</span></div>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <div>
          <i class="iconfont icon-zhuanye"></i>
          <span>我的专业</span>
        </div>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <div>
          <i class="iconfont icon-dingdan"></i>
          <span>我的订单</span>
        </div>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <div>
          <i class="iconfont icon-a-weibiaoti-1_huaban1fuben41"></i>
          <span>毕业管理</span>
        </div>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <div>
          <i class="iconfont icon-kaoshianpai"></i>
          <span>考次管理</span>
        </div>
      </template>
    </nut-cell>
    <nut-cell is-link>
      <template #title>
        <div>
          <i class="iconfont icon-kefu"></i>
          <span>客服/帮助</span>
        </div>
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
  const hanldeLogin = () => {
    router.push('/login');
  };
</script>

<style lang="scss">
  .avatar-wrap {
    display: flex;
    margin: 0 10px 20px;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 2px 7px 0px rgba(192, 192, 192, 0.5);
    padding: 32px 14px;
    border-radius: 10px;
    .member-detail {
      margin-left: 15px;
      .log-out {
        .out-first {
          font-size: 20px;
          color: #666666;
          padding: 0 0 5px 0;
        }
        .out-info {
          font-size: 13px;
          color: #999999;
        }
      }
    }
  }
  .nut-cell__title {
    color: #333;
    span {
      padding: 0 0 0 10px;
    }
  }
</style>
