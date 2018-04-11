import * as d3 from 'd3';

function render(cfg) {
  const width = cfg.width || 500;
  const height = cfg.height || 250;
  const json = cfg.json || {};

  // D3 Projection
  const projection = d3.geoMercator()
           .scale(10)
           .center([0, 0])
           .translate([width / 2, height / 2]);
  // Define path generator
  const path = d3.geoPath(projection);  // tell path generator to use albersUsa projection
  return getPaths(json, path);
}

function getPaths(json, path) {
  const paths = [];
  json.forEach(geojson => {
    paths.push(path(geojson));
  });
  return paths;
}

export const mapRenderMx = {
  render
};
