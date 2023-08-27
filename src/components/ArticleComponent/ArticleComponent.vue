<template>
  <div class="article-component">
    <project-component v-if="article.projects" :article="article"></project-component>
    <div v-else>
      <div class="period">
        <div v-if="article.periodStart" class="period-start">{{ article.periodStart }}</div>
        <div class="period-end">{{ article.periodEnd }}</div>
        <div v-if="article.period" class="period-string">{{ article.period }}</div>
      </div>
      <div class="content">
        <h2 class="name">{{ article.name }}</h2>
        <div v-for="item in article.description" class="description" v-html="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from '@/components/ProjectComponent/ProjectComponent';
var commonTextInfo = require('../../common/commonText');

export default {
  components: {
    'project-component': ProjectComponent
  },
  props: ['article'],
  data() {
    return {
      positionText: commonTextInfo.article.positionText
    };
  }
}
</script>

<style lang="scss">
@import "./ArticleComponent.scss";
</style>