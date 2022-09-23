function init() {
  map = new longdo.Map({
    placeholder: document.getElementById('map')
  });
  map.Ui.DPad.visible(false);
  map.Ui.Zoombar.visible(false);
  map.Ui.Geolocation.visible(false);
  map.Ui.Toolbar.visible(false);
  map.Ui.LayerSelector.visible(true);
  map.Ui.Fullscreen.visible(false);
  map.Ui.Crosshair.visible(false);
  map.location({lat:13.75, lon:100.5},false)
  map.bound({
    "minLat": 0.371667073304601,
    "minLon": 91.19457945227623,
    "maxLat": 21.716946745375022,
    "maxLon": 111.67309507727623
  });
  // console.log(data)
  data.forEach((prov) => {
    //   console.log(`var ${prov[0]} = new longdo.Popup({ lon: ${prov[2]}, lat: ${prov[1]} },
    // {
      //   title: '${prov[0]}',
      //   detail: 'Lorem'
      // })`)
  // console.log('execute1')
    eval(`var ${prov[0]} = new longdo.Popup({ lon: ${prov[2]}, lat: ${prov[1]} },
      {
        title: '${prov[0]}',
        detail: 'Lorem'
      })`)
    // console.log('execute2')
    eval(`map.Overlays.add(${prov[0]})`)
  })
}
