<template>
  <div class="body-component">
    <div class="navigation">
      <ul>
        <li v-for="displayText in displayTextInfo" :key="displayText.sectionName">{{ displayText.sectionName }}</li>
      </ul>
    </div>
    <div class="content">
      <section-component v-for="displayText in displayTextInfo" :key="displayText.sectionName"
        :display-text="displayText"></section-component>
    </div>
  </div>
</template>

<script>
import SectionComponent from '@/components/SectionComponent/SectionComponent'

var displayTextInfo = require('../../common/DisplayText');

console.log(displayTextInfo);
export default {
  components: {
    'section-component': SectionComponent
  },
  data: function () {
    return {
      displayTextInfo: displayTextInfo
    };
  }
}
</script>

<style lang="scss">
@import "./BodyComponent.scss";
</style>