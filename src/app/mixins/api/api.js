import axios from 'axios';

const apiUrl = 'http://webservices.nextbus.com/service/publicJSONFeed';

const errors = [];

export const apiMx = {
  getRouteData() {
    console.log('mixin get called');
    return axios.get(`${apiUrl}?command=routeList&a=sf-muni`)
      .then(res => {
        console.log('route data:', res);
        return res;
      })
      .catch(e => {
        errors.push(e);
        console.error('api request error: ' + e.message || e);
      });
  },
  getBusData(route) {
    return axios.get(`${apiUrl}?command=vehicleLocations&a=sf-muni&r=${route}&t=0`)
      .then(res => {
        console.log('bus data:', res);
        return res;
      })
      .catch(e => {
        errors.push(e);
        console.error('api request error: ' + e.message || e);
      });
  }
};
