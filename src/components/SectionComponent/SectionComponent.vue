<template>
  <div ref="sectionDiv" class="section-component">
    <Transition>
      <div>
        <a :name="navigation"></a>
        <h3 class="title">{{ resumeText.sectionName }}</h3>
        <article-component v-for="(item, index) in resumeText.article" :key="index" :article="item"></article-component>
      </div>
    </Transition>
  </div>
</template>

<script>
import ArticleComponent from '@/components/ArticleComponent/ArticleComponent';

export default {
  components: {
    'article-component': ArticleComponent
  },
  props: ['resumeText', 'navigation'],
  data() {
    return {
      observer: null,
      option: {
        root: null,
        threshold: 1,
      },
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const element = entries[0];
      const name = element.target.attributes.getNamedItem('name').value;
      this.$emit(`setNavigation`, name, element.isIntersecting);
    });
    this.observer.observe(this.$refs.sectionDiv);
  },
}
</script>

<style lang="scss">
@import "./SectionComponent.scss";
</style>