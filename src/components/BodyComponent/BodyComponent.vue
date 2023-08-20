<template>
  <div class="body-component">
    <div class="navigation">
      <ul>
        <li v-for="(displayText, index) in displayTextInfo" :key="index">
          <a :href="'#section_' + index">{{ displayText.sectionName }}</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <section-component v-for="(displayText, index) in displayTextInfo" :key="index" :display-text="displayText"
        :navigation="'section_' + index">
      </section-component>
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