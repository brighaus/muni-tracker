import axios from 'axios';

const apiUrl = 'http://webservices.nextbus.com/service/publicJSONFeed';

const errors = [];

export const apiMx = {
  getRouteData() {
    return axios.get(`${apiUrl}?command=routeList&a=sf-muni`)
      .then(res => {
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
        return res;
      })
      .catch(e => {
        errors.push(e);
        console.error('api request error: ' + e.message || e);
      });
  }
};
