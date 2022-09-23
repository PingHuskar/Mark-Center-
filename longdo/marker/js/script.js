var map;
function init() {
    map = new longdo.Map({
        placeholder: document.getElementById('map')
    })
    map.Ui.DPad.visible(false)
    map.Ui.Zoombar.visible(false)
    map.Ui.Geolocation.visible(false)
    map.Ui.Toolbar.visible(false)
    map.Ui.LayerSelector.visible(true)
    map.Ui.Fullscreen.visible(false)
    map.Ui.Crosshair.visible(false)
    map.location({lat:13.75, lon:100.5},false)
    map.bound({
        "minLat": 0.371667073304601,
        "minLon": 91.19457945227623,
        "maxLat": 21.716946745375022,
        "maxLon": 111.67309507727623
    });
    // map.Tags.add('accident_black_spot', {
    //     // visibleRange: { min: 10, max: 20 },
    //     icon: { url: 'https://mmmap15.longdo.com/mmmap/images/icons/accident_black_spot.png' }
    // })
    map.Tags.add('GH_bank', {
        // visibleRange: { min: 10, max: 20 },
        icon: { url: 'https://mmmap15.longdo.com/mmmap/images/icons/bank_gh.png' }
    })
    // map.Tags.add('cp', {
    //     // visibleRange: { min: 10, max: 20 },
    //     icon: { url: 'https://mmmap15.longdo.com/mmmap/images/icons/cp.png' }
    // })
    // map.Tags.add('7-11', {
    //     // visibleRange: { min: 10, max: 20 },
    //     icon: { url: 'https://mmmap15.longdo.com/mmmap/images/icons/7-11.png' }
    // })
    // map.Tags.add('hotel', {
    //     // visibleRange: { min: 10, max: 20 },
    //     icon: { url: 'https://mmmap15.longdo.com/mmmap/images/icons/hotel.png' }
    // })
    // map.Tags.add('school', {
    //     // visibleRange: { min: 10, max: 20 },
    //     icon: { url: 'https://mmmap15.longdo.com/mmmap/images/icons/shopping.png' }
    // })
    // map.Tags.add('temple', {
    //     visibleRange: { min: 12, max: 20 },
    //     icon: { url: 'https://mmmap15.longdo.com/mmmap/images/icons/temple.png' }
    // });
}