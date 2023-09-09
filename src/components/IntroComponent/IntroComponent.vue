<template>
  <div class="header-component">
    <div>
      <p class="subscription" v-html="subscription"></p>
      <p class="title" v-html="title"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscription: '안녕하세요, <b>백엔드 개발자</b>',
      title: '<b>정은주</b> 입니다.',
    }
  }
}
</script>

<style lang="scss">
@import "IntroComponent.scss";
</style>
