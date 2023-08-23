<template>
  <div class="section-component">
    <a :name="navigation"></a>
    <h3 class="title">{{ resumeText.sectionName }}</h3>
    <article-component v-for="(item, index) in resumeText.article" :key="index" :article="item"></article-component>
  </div>
</template>

<script>
import ArticleComponent from '@/components/ArticleComponent/ArticleComponent';

export default {
  components: {
    'article-component': ArticleComponent
  },
  props: ['resumeText', 'navigation'],
}
</script>

<style lang="scss">
@import "./SectionComponent.scss";
</style>