async function initMap(lon, lat) {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [lon, lat],
                zoom: 10
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());
}
