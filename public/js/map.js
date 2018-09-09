const initMap = (mapId) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia3VqbzRwbSIsImEiOiJDX2FzZmhJIn0.YwzXe1BGwBWa6R6YcSmh9A';
  const initParams = {
    'valley-map': {
        center: [146.399, -38.237],
        zoom: 5,
        container: mapId,
        style: 'mapbox://styles/kujo4pm/cjj2iam5r2gdd2sqtl2f6zx8x'
    },
    'zollverein': {
        center: [10.018, 51.133],
        zoom: 5,
        container: mapId,
        style: 'mapbox://styles/kujo4pm/cjj2iam5r2gdd2sqtl2f6zx8x'
    }
  };
  const flightPath ={
    'valley-map': [{
        id: 0,
        title: 'Victoria, Australia',
        description: 'population: 5.791 million <br /> size: 237,629 km²',
        camera: {
          zoom: 5,
          pitch: 0,
          bearing: 0,
          center: [146.399, -38.237],
        }
      },
      {
        id: 1,
        title: 'The Latrobe Valley',
        description: 'Settled after the Great War to power the state of Victoria',
        camera: {
          zoom: 10.9,
          pitch: 0,
          bearing: 0,
          center: [146.426876, -38.184674],
        },
      },
      {
        id: 2,
        title: 'Morwell',
        description: 'The highest rate of unemployment in Victoria, home of Hazelwood Power Station.',
        camera: {
          zoom: 12.75,
          pitch: 60.00,
          bearing: -21.60,
          center: [146.386594, -38.237684],
        }
      },
      {
        id: 3,
        title: 'Yallourn',
        description: 'Overview of Yallourn, 1948 Yallourn, Victoria was a company town in Victoria, Australia built between the 1920s and 1950s to house employees of the State Electricity Commission of Victoria, who operated the nearby Yallourn Power Station complex. However, expansion of the adjacent open-cut brown coal mine led to the closure and removal of the town in the 1980s. (wikipedia)',
        camera: {
          zoom: 13.70,
          pitch: 60.00,
          bearing: 135.20,
          center: [146.349099, -38.182455],
        }
      }
    ],
    'zollverein': [{
      id: 0,
      title: 'Germany',
      description: 'Europe\'s industrial powerhouse',
      camera: {
        zoom: 5,
        pitch: 0,
        bearing: 0,
        center: [10.018, 51.133],
      }
    },
    {
      id: 1,
      title: 'The Ruhr Valley',
      description: 'With a population density of 2,800/km2 and a population of over 5 million (2011), it is the largest urban area in Germany, and third-largest in the European Union. (wikipedia)',
      camera: {
        zoom: 10,
        pitch: 0,
        bearing: 0,
        center: [6.991, 51.455],
      },
    },
    {
      id: 2,
      title: 'Zollverein',
      description: 'The giant mining complex is the world\'s most successful transitions from coal to renewables',
      camera: {
        zoom: 16.5,
        pitch: 60,
        bearing: -18.40,
        center: [7.036,51.487],
      }
    }
  ]
  } ;
  debugger;
  const map = new mapboxgl.Map(initParams[mapId]);


  const playback = (index) => {
    // Animate the map position based on camera properties
    map.flyTo({
      easing: t => Math.cbrt(t),
      speed: 0.5,
      ...flightPath[mapId][index].camera
    });

    map.once('moveend', () => {
        $('#location-title').text(flightPath[mapId][index].title);
        $('#location-description').html(flightPath[mapId][index].description);
        // Duration the slide is on screen after interaction
        window.setTimeout(() => {
            // Increment index
            index = (index + 1 === flightPath[mapId].length) ? 0 : index + 1;
            playback(index);
        }, 5000); // After callback, show the location for 3 seconds.
    });
  }


  map.on('load', () => {
    playback(0);
  });
};