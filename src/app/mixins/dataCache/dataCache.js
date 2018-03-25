import {apiMx} from '../api/api.js';
import {eventBarkerMx} from '../eventBarker/eventBarker.js';

let cache = [];
let routes = [];
const busses = [];

const getBusData = function (route) {
  apiMx.getBusData(route)
    .then(r => {
      console.log('bus data for:', r.data);
      busses.push(r.data);
      cache = busses;
      eventBarkerMx.$emit('cacherefreshed', cache);
    })
    .catch(err => {
      console.log('dataCacheMx ERROR:', err.message || err);
    });
};

export const dataCacheMx = {
  getCache() {
    return cache;
  },
  refreshCache() {
    // 1. get all routes
    if (routes.length === 0) {
      apiMx.getRouteData()
      .then(r => {
        routes = r.data;
        console.log('routes:', routes);
        // loop routes and updates the busses list
        getBusData('N');
        // will finally happen before they finish? finally caleed before bus data tetched.
        // eventBarkerMx.$emit('cacherefreshed', cache);
      })
      .catch(err => {
        console.log('dataCacheMx ERROR:', err.message || err);
      });
    }
    // 2. get route data
  }
};
