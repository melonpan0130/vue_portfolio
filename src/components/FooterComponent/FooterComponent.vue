<template>
  <div class="footer-component">
    <div>
      <span>{{ commonTextInfo.comment }}</span>
      <div>
        <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect -
          Flaticon</a>
      </div>
    </div>
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
