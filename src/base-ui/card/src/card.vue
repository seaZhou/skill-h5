<template>
  <nut-card style="margin-bottom: 16px" ripple :title="rows[name + 'Name']" :img-url="rows[name + 'PicUrl']" layout="row">
    <template #prolist>
      <div class="fl p-c-10" v-if="isShowRate">
        <nut-rate spacing="5" icon-size="12" active-color="#FFC800" v-model="rate" />
        <nut-button class="btn-primary" type="primary" size="mini" style="font-size: 12px">立即报名</nut-button>
      </div>
      <div class="" v-if="isShowDesc">
        <div class="color-3">{{ rows.tager }}</div>
        <div class="color-9" v-html="rows.intro"></div>
      </div>
    </template>
    <template #price><nut-price class="p-5" :price="1886" size="normal" :thousands="true" /><span class="color-9">人已报名</span></template>
    <template #origin></template>
  </nut-card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const props = defineProps({
    rows: {
      type: Object,
      default: () => ({}),
    },
    name: {
      type: String,
      requird: true,
    },
    isShowRate: {
      type: Boolean,
      default: false,
    },
    isShowDesc: {
      type: Boolean,
      default: false,
    },
  });
  const rate = ref(4);
</script>
