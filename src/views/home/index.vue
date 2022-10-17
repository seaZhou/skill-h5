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
      <span class="title">{{ item.title }}</span>
    </nut-grid-item>
  </nut-grid>
  <nut-cell-group v-for="item in checkMoreList" :key="item.id">
    <template #title>
      <div class="cell-list-title">
        <h4 class="title-left">{{ item.title }}</h4>
        <div class="title-more">查看更多<nut-icon size="12px" name="arrow-right" /></div>
      </div>
    </template>
    <template v-if="item.id === 2">
      <nut-cell class="m-10" v-for="i in getLessonList" :key="i.lessonId">
        <hp-card :rows="i" :name="'lesson'" :isShowDesc="true" />
      </nut-cell>
    </template>
    <template v-if="item.id === 1">
      <nut-cell v-for="i in getLiveList" :key="i.courseId">
        <hp-card :rows="i" :name="'hours'" :isShowRate="true" />
      </nut-cell>
    </template>
  </nut-cell-group>
</template>

<script lang="ts" setup name="HomePage">
  import { computed } from 'vue';
  import { useLessonStore } from '../../store/modules/lesson/lesson';
  import HpCard from '/@/base-ui/card';
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
  const components = defineComponent({
    HpCard,
  });
  const checkMoreList = ref([
    { title: '直播预告', id: 1 },
    { title: '推荐课程', id: 2 },
  ]);
  const icons = ref([
    { src: icon1, title: '课程类型' },
    { src: icon2, title: '班级' },
    { src: icon3, title: '资料' },
    { src: icon4, title: '学习报告' },
  ]);
  const commonParmas = {
    pageSize: 2,
    pageNum: 1,
    orderByColumn: 'create_time',
    isAsc: 'desc',
  };
  onMounted(() => {
    lessonStore.lessonList(commonParmas);
    lessonStore.liveList(commonParmas);
  });
  const getLessonList = computed(() => {
    const list = lessonStore.getLessonList || [];
    return list;
  });
  const getLiveList = computed(() => {
    console.log(lessonStore.getLiveList, 'userStore.getLiveList');
    const list = lessonStore.getLiveList || [];
    return list;
  });
</script>
<style lang="scss" scoped>
  .header {
    .nut-swiper-item {
      width: 100%;
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

  .cell-list-title {
    display: flex;
    justify-content: space-between;
    .title-left {
      color: #333333;
    }
    .title-left::before {
      width: 59px;
      height: 12px;
      background: #d8e7ff;
      border-radius: 4px;
      content: '';
    }
    .title-more {
      font-size: 12px;
      color: #666666;
      display: flex;
      align-items: center;
    }
  }
  .title {
    color: #333;
    font-size: 12px;
    padding: 10px 0 0;
  }
  .m-10 {
    background: #ffffff;
    box-shadow: 0px 2px 7px 0px #f0f0f0;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .nut-card .nut-card__left {
    width: 162px;
    height: 91px;
  }
</style>
