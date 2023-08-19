<template>
  <div class="article-component">
    <div class="period">
      <div class="period-start">{{ period_start }}</div>
      <div class="period-end">{{ period_end }}</div>
    </div>
    <div class="content">
      <h2 class="name">{{ name }}</h2>
      <div class="description" v-html="description"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['period_start', 'period_end', 'name', 'description']
}
</script>

<style lang="scss">
@import "./ArticleComponent.scss";
</style>