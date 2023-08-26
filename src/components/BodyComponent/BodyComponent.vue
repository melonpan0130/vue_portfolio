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
        :navigation="'section_' + index" :name="'section_' + index" @setNavigation="setNavigation">
      </section-component>
    </div>
  </div>
</template>

<script>
import SectionComponent from '@/components/SectionComponent/SectionComponent';
const resumeTextInfo = require('../../common/resumeText');

export default {
  components: {
    'section-component': SectionComponent,
  },
  data: function () {
    return {
      resumeTextInfo: resumeTextInfo,
      navigationList: null
    };
  },
  mounted: function () {
    this.navigationList = document.querySelectorAll('.navigation a');
  },
  methods: {
    setNavigation: function (name, activeFlag) {
      const anchor = document.querySelector('.navigation a[href="#' + name + '"]');
      if (activeFlag) {
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }

      // Reset 'selected'
      this.navigationList.forEach(nav => {
        nav.classList.remove('selected');
      });

      // Add class 'selected' to first of a.active
      const active = document.querySelector('.navigation a.active');
      if (active !== null) {
        active.classList.add('selected');
      }
    },
  },
}
</script>

<style lang="scss">
@import "./BodyComponent.scss";
</style>