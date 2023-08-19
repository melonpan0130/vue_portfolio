<template>
  <div class="section-component">
    <h3 class="title">{{ title }}</h3>
    <article-component :period_start="2023.07" :period_end="2024.07" :name="'고려사이버대학교'"
      :description="'소프트웨어공학과 전공 <b>학사</b>'"></article-component>
    <article-component :period_start="2023.07" :period_end="2024.07" :name="'고려사이버대학교'"
      :description="'소프트웨어공학과 전공 <b>학사</b>'"></article-component>
  </div>
</template>

<script>
import ArticleComponent from '@/components/ArticleComponent/ArticleComponent';
export default {
  components: {
    'article-component': ArticleComponent
  },
  props: ['title'],
}
</script>

<style lang="scss">
@import "./SectionComponent.scss";
</style>