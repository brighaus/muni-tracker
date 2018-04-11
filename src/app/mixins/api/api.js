// import axios from 'axios';

// const apiUrl = 'http://webservices.nextbus.com/service/publicJSONFeed';

// const errors = [];

export const apiMx = {
  getRouteData() {
    return Promise.resolve({
      data: {
        route: [{tag: 'N'}]
      }
    });
    // return axios.get(`${apiUrl}?command=routeList&a=sf-muni`)
    //   .then(res => {
    //     return res;
    //   })
    //   .catch(e => {
    //     errors.push(e);
    //     console.error('api request error: ' + e.message || e);
    //   });
  },
  getBusData(route) {
    return Promise.resolve({
      data: {
        route,
        vehicle: [
          {id: 123, lat: 37.793812, lon: 122.39579},
          {id: 60, lon: -122.403954, lat: 37.792435},
          {id: 58, lon: -122.401581, lat: 37.793213}
        ]
      }
    });
    // return axios.get(`${apiUrl}?command=vehicleLocations&a=sf-muni&r=${route}&t=0`)
    //   .then(res => {
    //     return res;
    //   })
    //   .catch(e => {
    //     errors.push(e);
    //     console.error('api request error: ' + e.message || e);
    //   });
  }
};
