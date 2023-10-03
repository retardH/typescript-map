/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import {CustomMap} from "./CustomMap.ts";

let testUser = new User();
let testCompany = new Company();

console.log('user and the company', testUser, testCompany);

new CustomMap('map');
