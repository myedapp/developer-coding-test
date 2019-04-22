import http from "./httpService";
import {apiUrl} from '../config';

const apiEndpointGetUsers = "/get-students";
const apiEndpointGetReports = "/get-reports";

export function getStudents() {
    const data = http.get(apiUrl+apiEndpointGetUsers);
    return data;
}

export function getReports() {
    const data = http.get(apiUrl+apiEndpointGetReports);
    return data;
}

