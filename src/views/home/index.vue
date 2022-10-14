<template>
  <div class="header">
    <nut-swiper :init-page="state.page" loop :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item v-for="item in state.list" :key="item">
        <img :src="item" alt="" style="height: 130px" />
      </nut-swiper-item>
    </nut-swiper>
  </div>
  <!-- <div class="adamantine-compound"> -->
  <nut-grid :border="false">
    <nut-grid-item v-for="(item, index) in icons" :key="index">
      <img :src="item.src" alt="" />
      <span>{{ item.title }}</span>
    </nut-grid-item>
  </nut-grid>
  <!-- </div> -->
  <var-cell>
    <template #default> 我的课程 </template>
    <template #extra><var-icon name="chevron-right" /></template>
  </var-cell>
  <nut-card
    style="margin-bottom: 16px"
    ripple
    :title="item.lessonName"
    :img-url="item.lessonPicUrl"
    layout="row"
    v-for="item in getLessonList"
    :key="item.lessonId"
  >
    <template #prolist>
      <div>
        <nut-rate spacing="16" icon-size="12" active-color="#FFC800" v-model="rate" />
        <nut-button plain color="#438AFE" type="info" size="mini">立即报名</nut-button>
      </div>
    </template>
    <template #price><nut-price :price="1886" size="normal" :need-symbol="false" :thousands="true" /></template>
    <template #origin>{{}}人已报名</template>
  </nut-card>
</template>

<script lang="ts" setup name="HomePage">
  import { computed } from 'vue';
  import { useLessonStore } from '../../store/modules/lesson/lesson';
  import icon1 from '../../assets/images/首页-课程类型icon.png';
  import icon4 from '../../assets/images/首页-学习报告icon.png';
  import icon3 from '../../assets/images/首页-资料icon.png';
  import icon2 from '../../assets/images/首页-题库icon.png';
  const lessonStore = useLessonStore();
  const state = reactive({
    page: 2,
    list: [
      'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
      'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
    ],
  });
  const icons = ref([
    { src: icon1, title: '课程类型' },
    { src: icon2, title: '班级' },
    { src: icon3, title: '资料' },
    { src: icon4, title: '学习报告' },
  ]);
  const commonParmas = {
    pageSize: 6,
    pageNum: 1,
    orderByColumn: 'create_time',
    isAsc: 'desc',
  };
  onMounted(() => {
    lessonStore.lessonList(commonParmas);
    console.log(lessonStore.rows, 'userStore');
  });
  const getLessonList = computed(() => {
    console.log(lessonStore.getLessonList, 'userStore.getLessonList');
    const list = lessonStore.getLessonList || [];
    return list;
  });
  const rate = ref(4);
</script>
<style lang="scss" scoped>
  .header {
    .nut-swiper-item {
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
  .var-card__container {
    padding: 0 15px 0 10px;
  }
</style>
