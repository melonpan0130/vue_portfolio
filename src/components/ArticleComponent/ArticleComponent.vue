<template>
  <div class="article-component">
    <div class="period">
      <div v-if="article.periodStart" class="period-start">{{ article.periodStart }}</div>
      <div class="period-end">{{ article.periodEnd }}</div>
      <div v-if="article.period" class="period-string">{{ article.period }}</div>
    </div>
    <div class="content">
      <h2 class="name">{{ article.name }}</h2>
      <div v-for="item in article.description" class="description" v-html="item"></div>
      <div v-if="article.projects">
        <div v-for="project in article.projects" class="project">
          <div class="title">
            <div class="topic">{{ project.topic }}</div>
            <div class="name" v-html="project.name"></div>
          </div>
          <div class="period">
            <div class="period-start">{{ project.periodStart }}</div>
            <div class="period-end">{{ project.periodEnd }}</div>
          </div>
          <div class="position">
            <p>{{ positionText }}</p>{{ project.position }}
          </div>
          <div v-for="description in project.description" class="description">{{ description }}</div>
          <ul v-if="project.detail" class="detail">
            <li v-for="item in project.detail" v-html="item"></li>
          </ul>
          <div v-if="project.techStack" class="techStack">
            <div>Tech Stack</div>
            <ul>
              <li v-for="stack in project.techStack">
                <span class="name">{{ stack.name }}</span>
                <span v-for="item in stack.list" class="item">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div v-if="project.images" class="images">
            <img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var commonTextInfo = require('../../common/commonText');

export default {
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