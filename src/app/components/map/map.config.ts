
import { latLng, tileLayer, imageOverlay } from 'leaflet';

export const DEFAULT_POSITION = {
    latitude: 31.986422990470114,
    longtitude: 34.912109971046455,
};

export const MAP_IMAGE_PLACEMENT = {
    lat: 31.9864847970075,
    lng: 34.91057791630738,
    angle: 33.22293949804897,
    scale: 2.7545901595931728,
    opacity: 0.7
};

export const DEFAULT_MAP_OPTIONS = {
    layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            maxNativeZoom: 20,
        }),
        imageOverlay('assets/F2.png',
                                [[31.986700141088527, 34.91045752124887],
                                [MAP_IMAGE_PLACEMENT.lat, MAP_IMAGE_PLACEMENT.lng]],
                                {opacity: 0.9, }
                            )
    ],
    zoom: 18,
    center: latLng(DEFAULT_POSITION.latitude, DEFAULT_POSITION.longtitude),
};

