<template>
  <div>
  <h1>{{ text }}</h1>
  <h3>map data</h3>
  <svg id="mapContainer" width="500" height="270">
      <g>
        <path v-for="path in geoPaths" class="street-lines" :d="path"></path>
      </g>
  </svg>
  <p v-for="mapType in mapData" :mapType="mapType">{{  mapType.features ? mapType.features.length: 0}}</p>
  <hr/>
  <p v-for="bus in busData" :bus="bus">id: {{  bus.id }}, lon: {{ bus.lon }}, lat: {{ bus.lat }}</p>
  </div>
</template>

<script>
import * as d3 from 'd3';
import {eventBarkerMx} from '../../mixins/eventBarker/eventBarker.js';
import {mapRenderMx} from '../../mixins/mapRender/mapRender.js';
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
      },
      busData:[],
      geoPaths: [],
      line: ''
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

    // just load streets for now...
    this.$http
      .get('app/json/sfmaps/streets.json')
      .then(response => response.json())
      .then(response => {
        this.mapData['neighborhoods'] = response;
        // render the map...
        this.geoPaths = 
          mapRenderMx.render({
            svg: document.getElementById('mapContainer'),
            json: this.mapData['neighborhoods'].features,
            width: 500,
            height: 275
          });
        console.log('loaded', this.geoPaths);
      }).
      catch(err => {
        console.error('get missed:', err);
      });


    eventBarkerMx.$on('cacherefreshed', payload => {
      while(payload.length > 0) {
        this.busData.push(payload.pop());
      }
    });

  }
};
</script>
