data.forEach((prov) => {
    L.popup()
    .setLatLng([prov[1], prov[2]])
    .setContent(`
    <h6>${prov[0]}</h6>
    <h6>Lorem Ipsum</h6>
    <h6>Lorem Ipsum</h6>
    <h6>${prov[1]},${prov[2]}</h6>
    `)
    .addTo(map).openOn(map)
})