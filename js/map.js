mapboxgl.accessToken = 'pk.eyJ1Ijoib2xtbzk1IiwiYSI6ImNreGtqd3c3aTE3YzYycXViMW1xZ2NwNHcifQ.-6KPm5u6FHFcoCkl0UuLIw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }
  
  function errorLocation() {
    setupMap([14.3545, 37.4703])
  }
  
  function setupMap(center) {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [14.6420751, 37.7496118],
      zoom: 11
    })
  
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
  
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    })
  
    map.addControl(directions, "top-left")
  }

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});