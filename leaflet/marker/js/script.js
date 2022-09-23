data.forEach((prov) => {
    L.marker([prov[1], prov[2]]).bindPopup(`<h6>${prov[0]}</h6>
    <h6>Lorem Ipsum</h6>
    <h6>Lorem Ipsum</h6>
    <h6>${prov[1]},${prov[2]}</h6>`).openPopup().addTo(map);
})