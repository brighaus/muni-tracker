import {apiMx} from '../api/api.js';
import {eventBarkerMx} from '../eventBarker/eventBarker.js';

let cache = [];
let routes = [];
const busses = [];

const getBusData = function (route, limit, index) {
  // console.log('inbdex',index);
  apiMx.getBusData(route)
    .then(r => {
      // console.log('bus data for:', r.data);
      if (r.data.vehicle) {
        // console.log('r.d.v:', r.data.vehicle);
        if (r.data.vehicle.forEach) {
          r.data.vehicle.forEach(v => {
            // console.log('v:', v);
            busses.push(v);
          });
        } else {
          busses.push(r.data.vehicle);
        }
        if (index + 1 === limit) {
          console.log('dataCache emits cacherefreshed...', limit);
          cache = busses;
          eventBarkerMx.$emit('cacherefreshed', cache);
        }
      }
    })
    .catch(err => {
      console.log('dataCacheMx ERROR:', err.message || err, err);
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
        // loop routes and updates the busses list
        routes.route.forEach((rte, i) => {
          getBusData(rte.tag, routes.route.length, i);
        });
      })
      .catch(err => {
        console.log('dataCacheMx ERROR:', err.message || err);
      });
    }
    // 2. get route data
  }
};
