<template>
  <div class="footer-component">
    <span>{{ commonTextInfo.comment }}</span>
  </div>
</template>

<script>

var commonTextInfo = require('../../common/commonText');
export default {
  data() {
    return {
      commonTextInfo: commonTextInfo.footer
    };
  }
}
</script>

<style lang="scss">
@import "./FooterComponent.scss";
</style>
