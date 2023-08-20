<template>
  <div class="section-component">
    <a :name="navigation"></a>
    <h3 class="title">{{ displayText.sectionName }}</h3>
    <article-component v-for="(item, index) in displayText.article" :key="index" :article="item"></article-component>
  </div>
</template>

<script>
import ArticleComponent from '@/components/ArticleComponent/ArticleComponent';
export default {
  components: {
    'article-component': ArticleComponent
  },
  props: ['displayText', 'navigation'],
}
</script>

<style lang="scss">
@import "./SectionComponent.scss";
</style>