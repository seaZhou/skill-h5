<template>
  <nut-navbar :left-show="false" :title="$t($route.meta.title)" />
  <div class="main-page">
    <RouterView v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </RouterView>
    <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
  </div>
  <nut-tabbar
    safe-area-inset-bottom
    unactive-color="#CCCCCC"
    active-color="#438AFE"
    @tab-switch="tabSwitch"
    bottom
    v-model:visible="activeTab"
  >
    <nut-tabbar-item v-for="item in tabItem" :key="item.key" :tab-title="$t(`tabbar.${item.key}`)" class="iconfont" :class="item.icon" />
  </nut-tabbar>
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import { useRouter } from 'vue-router';

  const tabItem = [
    { key: 'home', icon: 'icon-shouye' },
    { key: 'myCourse', icon: 'icon-kecheng' },
    { key: 'news', icon: 'icon-xiaoxizhongxin' },
    { key: 'member', icon: 'icon-wode' },
  ];

  const router = useRouter();

  const activeTab = ref(0);

  onMounted(() => {
    activeTab.value = tabItem.findIndex((item) => item.key === router.currentRoute.value.path.replace('/', ''));
  });

  const tabSwitch = (_item: object, index: number) => {
    console.log(_item, index);
    switch (index) {
      case 0:
        router.push('/home');
        break;
      case 1:
        router.push('/myCourse');
        break;
      case 2:
        router.push('/news');
        break;
      case 3:
        router.push('/member');
    }
    activeTab.value = index;
  };
</script>

<style scoped lang="scss">
  .nut-navbar {
    margin-bottom: 0;
    background: linear-gradient(155deg, #77befe 0%, #438afe 100%);
    ::v-deep .nut-navbar__title .title {
      color: #fff;
    }
  }
  .nut-tabbar-bottom .nut-tabbar-item {
    display: flex;
    flex-direction: column;
  }

  .main-page {
    box-sizing: border-box;
    padding: 20px;
    height: calc(100vh - 200px);
    overflow-y: scroll;
    overflow-x: hidden;
    // background: #f8f8f8;
  }
</style>
