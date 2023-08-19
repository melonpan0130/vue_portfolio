<template>
  <div class="header-component">
    <div>
      <h1 class="title" v-html="title"></h1>
      <h1 class="subscription">{{ subscription }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // TODO set language
      title: '안녕하세요, <b>정은주</b> 입니다.',
      subscription: '백엔드 개발자'
    }
  }
}
</script>

<style lang="scss">
@import "HeaderComponent.scss";
</style>
