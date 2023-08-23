<template>
  <div class="body-component">
    <div class="navigation">
      <ul>
        <li v-for="(resumeText, index) in resumeTextInfo" :key="index">
          <a :href="'#section_' + index">{{ resumeText.sectionName }}</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <section-component v-for="(resumeText, index) in resumeTextInfo" :key="index" :resume-text="resumeText"
        :navigation="'section_' + index">
      </section-component>
    </div>
  </div>
</template>

<script>
import SectionComponent from '@/components/SectionComponent/SectionComponent'
var resumeTextInfo = require('../../common/resumeText');

export default {
  components: {
    'section-component': SectionComponent
  },
  data: function () {
    return {
      resumeTextInfo: resumeTextInfo
    };
  }
}
</script>

<style lang="scss">
@import "./BodyComponent.scss";
</style>