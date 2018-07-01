mapboxgl.accessToken = 'pk.eyJ1Ijoia3VqbzRwbSIsImEiOiJDX2FzZmhJIn0.YwzXe1BGwBWa6R6YcSmh9A';
const flightPath = [{
  id: 2,
  title: 'Victoria, Australia',
  camera: {
    zoom: 5,
    pitch: 0,
    bearing: 0,
    center: [146.399, -38.237],
  }
},
{
  id: 2,
  title: 'Victoria, Australia',
  camera: {
    zoom: 10.9,
    pitch: 0,
    bearing: 0,
    center: [146.426876, -38.184674],
  },
},
{
  id: 2,
  title: 'Victoria, Australia',
  camera: {
    zoom: 12.75,
    pitch: 60.00,
    bearing: -21.60,
    center: [146.386594, -38.237684],
  }
}
];

const map = new mapboxgl.Map({
    center: [146.399, -38.237],
    zoom: 5,
    container: 'test-map',
    style: 'mapbox://styles/kujo4pm/cjj2iam5r2gdd2sqtl2f6zx8x'
});




const playback = (index) => {
  // Animate the map position based on camera properties
  map.flyTo(flightPath[index].camera);

  map.once('moveend', () => {
      // Duration the slide is on screen after interaction
      window.setTimeout(() => {
          // Increment index
          index = (index + 1 === flightPath.length) ? 0 : index + 1;
          playback(index);
      }, 3000); // After callback, show the location for 3 seconds.
  });
}


map.on('load', () => {
  playback(0);
});