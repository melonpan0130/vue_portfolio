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
import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { CommonUtil } from '../../common/common.util';
const resumeTextInfo = require('../../common/resumeText');
const scrollTopList = [];

export default {
  components: {
    'section-component': SectionComponent,
  },
  data: function () {
    return {
      resumeTextInfo: resumeTextInfo,
      // scrollTopList: []
    };
  }
}

window.addEventListener('load', () => {
  const firstNavigation = document.querySelector('.navigation a');
  firstNavigation.classList.add('selected');

  for (let index = 0; index < resumeTextInfo.length; index++) {
    const sectionId = 'a[name="' + CommonUtil.SECTION_NAME_PREV + index + '"]';
    const section = document.querySelector(sectionId);
    const viewport = section.getBoundingClientRect();
    scrollTopList.push(viewport.top);
  }
});

// can be component's listener?
window.addEventListener('scroll', (e) => {
  const current = document.querySelector('.navigation .selected');
  if (current !== null) {
    const href = current.href;
    const split = href.indexOf(CommonUtil.SECTION_NAME_PREV) + CommonUtil.SECTION_NAME_PREV.length;
    const curIndex = Number(href.substring(split));
    const scrollTop = document.documentElement.scrollTop;

    let nextIndex = curIndex;
    if (curIndex !== 0 && scrollTop < scrollTopList[curIndex]) {
      nextIndex--;
    }
    if (curIndex !== scrollTopList.length - 1 && scrollTop > scrollTopList[curIndex + 1]) {
      nextIndex++;
    }

    if (curIndex !== nextIndex) {
      const nextSelected = document.querySelector('.navigation li:nth-child(' + (nextIndex + 1) + ') a');
      console.log(nextSelected);
      nextSelected.classList.add('selected');
      current.classList.remove('selected');
    }
  }
})
</script>

<style lang="scss">
@import "./BodyComponent.scss";
</style>