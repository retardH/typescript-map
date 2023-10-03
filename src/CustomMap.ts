interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
}

export class CustomMap {
    private readonly googleMap: google.maps.Map;

    public get googleMapInstance() {
        return this.googleMap;
    }

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        })

    }
}