const Utils = {
    calcMiddleLatLng(map, latlng1, latlng2) {
        // calculate the middle coordinates between two markers

        const p1 = map.project(latlng1);
        const p2 = map.project(latlng2);

        return map.unproject(p1._add(p2)._divideBy(2));
    },

    rotatePoint(map, latlngPoint, angleDeg, latlngCenter) {
        let maxzoom = map.getMaxZoom();
        if (maxzoom === Infinity) {
            maxzoom = map.getZoom();
        }
        const angleRad = (angleDeg * Math.PI) / 180;
        const pPoint = map.project(latlngPoint, maxzoom);
        const pCenter = map.project(latlngCenter, maxzoom);
        const x2 = ((Math.cos(angleRad) * (pPoint.x - pCenter.x)) - (Math.sin(angleRad) * (pPoint.y - pCenter.y))) + pCenter.x;
        const y2 = (Math.sin(angleRad) * (pPoint.x - pCenter.x)) + (Math.cos(angleRad) * (pPoint.y - pCenter.y)) + pCenter.y;
        return map.unproject(new L.Point(x2, y2), maxzoom);
    },
};

export default Utils;
