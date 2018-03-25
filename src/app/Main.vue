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
import {dataCacheMx} from '../app/mixins/dataCache/dataCache.js';
import {eventBarkerMx} from '../app/mixins/eventBarker/eventBarker.js';


export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'title-component': Title,
    'map-display': MapDisplay,
    'footer-component': Footer
  },
  mounted() {
    let startCache = dataCacheMx.getCache();
    let refreshed = [];
    eventBarkerMx.$on('cacherefreshed', c => {
      refreshed = c;
      console.log('main got cacherefresh', refreshed);
    });
    dataCacheMx.refreshCache();
    // console.log('main mounted dataCache refresh:', refreshed, eventBarkerMx);
    //eventBarkerMx.$emit('cacherefreshed', refreshed);
  }
};
</script>
