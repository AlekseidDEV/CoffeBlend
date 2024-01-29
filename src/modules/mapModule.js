import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as VectorSource } from 'ol/source';
import { TileWMS, Vector as VectorLayer } from 'ol/layer';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';
import Zoom from 'ol/control/Zoom';



const map = new Map({
  target: 'map-js',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
    maxZoom: 50,
    constrainRotation: false,
  }),

  controls: [
    new Zoom()
  ],
});

const vectorSource = new VectorSource();
const vectorLayer = new VectorLayer({
  source: vectorSource,
});
map.addLayer(vectorLayer);


const marker = new Overlay({
  position: fromLonLat([37, 56]), 
  positioning: 'center-center',
  element: document.getElementById('marker'), 
  stopEvent: false,
});
map.addOverlay(marker);

export default map;