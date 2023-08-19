<template>
  <div class="article-component">
    <div class="period">
      <div v-if="article.periodStart" class="period-start">{{ article.periodStart }}</div>
      <div class="period-end">{{ article.periodEnd }}</div>
    </div>
    <div class="content">
      <h2 class="name">{{ article.name }}</h2>
      <div v-for="(item, index) in article.description" :key="index" class="description" v-html="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="scss">
@import "./ArticleComponent.scss";
</style>