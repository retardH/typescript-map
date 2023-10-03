import { User} from "./User.ts";
import {Company} from "./Company.ts";

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

    addUserMarker() {

    }

    addCompanyMarker() {

    }
}