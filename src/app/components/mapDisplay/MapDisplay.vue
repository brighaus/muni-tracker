<template>
  <div>
  <h1>{{ text }}</h1>
  <h3>map data</h3>
  <p v-for="mapType in mapData" :mapType="mapType">{{  mapType.features ? mapType.features.length: 0}}</p>
  </div>
</template>

<script>
import * as d3 from "d3";
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
  name: 'mapDisplay',
  data() {
    return {
      text: 'This is Map Display',
      mapData: {
        'arteries': {},
        'freeways': {},
        'neighborhoods': {},
        'streets': {}
      }
    }
  },
  created() {


    const mapsConfig = [
      {key: 'arteries',
       path: 'app/json/sfmaps/arteries.json'},
       {key: 'freeways',
       path: 'app/json/sfmaps/freeways.json'},
       {key: 'neighborhoods',
       path: 'app/json/sfmaps/neighborhoods.json'},
       {key: 'streets',
       path: 'app/json/sfmaps/streets.json'}
    ];

    mapsConfig.map(x => {
      this.$http
      .get(x.path)
      .then(response => response.json())
      .then(response => {
        this.mapData[x.key] = response;
        console.log(x.key, 'loaded', this.mapData[x.key]);
      }).
      catch(err => {
        console.error('get missed:', err);
      });
    });
  }
};
</script>
