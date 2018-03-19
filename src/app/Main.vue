<template>
  <div id="root">
    <header-component></header-component>
    <main>
      <title-component></title-component>
      <map-display></map-display>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Header from './Header.vue';
import Title from './Title.vue';
import MapDisplay from './components/mapDisplay/MapDisplay.vue';
import Footer from './Footer.vue';
/* import './scss/techs.scss'; */

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'title-component': Title,
    'map-display': MapDisplay,
    'footer-component': Footer
  }
};
</script>
