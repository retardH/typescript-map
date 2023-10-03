/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import {CustomMap} from "./CustomMap.ts";

let testUser = new User();
let testCompany = new Company();

const customMap = new CustomMap('map'); 
customMap.addMarker(testUser);
customMap.addMarker(testCompany);
