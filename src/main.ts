/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";


let testUser = new User();
let testCompany = new Company();

console.log('user and the company', testUser, testCompany);

let map = new google.maps.Map(document.getElementById('map') as HTMLElement);