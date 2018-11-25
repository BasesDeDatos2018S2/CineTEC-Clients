import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Reservation } from '../classes/reservation';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"reservation/";
    console.log("CinemaService works");
  }
  createCinema(reservation:Reservation){
    return this.httpClient.post(this.baseurl,reservation );
  }


}
