<template>
  <div class="header-component">
    <div class="information">
      <a class="github" href="https://github.com/melonpan0130"></a>
    </div>
    <div class="mainTitle">
      <p class="subscription" v-html="subscription"></p>
      <p class="title" v-html="title"></p>
    </div>
  </div>
</template>

<script>
var commonTextInfo = require('../../common/commonText');

export default {
  data() {
    return {
      subscription: commonTextInfo.header.subscription,
      title: commonTextInfo.header.title,
    }
  }
}
</script>

<style lang="scss">
@import "HeaderComponent.scss";
</style>
