<template>
  <div>
    <nut-tabs v-model="tab1value">
      <nut-tabpane title="公告" />
      <nut-tabpane title="通知" />
    </nut-tabs>
  </div>
</template>

<script setup name="DemoPage">
  import { i18n } from '/@/i18n';
  import { ref } from 'vue';
  // import { useI18n } from 'vue-i18n';
  // const { locale } = useI18n();
  const tab1value = ref(0);
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  section {
    .title {
      margin-bottom: 40px;
      display: inline-block;
    }
    &:nth-child(2) {
      .title {
        margin-top: 20px;
      }
    }
  }
  .demo {
    > :nth-child(n) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
</style>
