<template>
  <div class="main-component">
    <header-component />
    <body-component />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import BodyComponent from '@/components/BodyComponent/BodyComponent';
import FooterComponent from '@/components/FooterComponent/FooterComponent';

export default {
  name: 'MainComponent',
  components: {
    'header-component': HeaderComponent,
    'body-component': BodyComponent,
    'footer-component': FooterComponent
  }
}
</script>

<style lang="scss">
@import "./MainComponent.scss";
</style>