import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Protagonist } from '../classes/protagonist';

@Injectable({
  providedIn: 'root'
})
export class ProtagonistsService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"actors/";
    console.log("ProtagonistService works");
  }
  getProtagonists(){
    return this.httpClient.get<Protagonist[]>(this.baseurl);
  }
  getProtagonist(id:string){
    console.log("pidiendo a", this.baseurl+id);
    return this.httpClient.get<Protagonist>(this.baseurl+id);
  }
  updateProtagonist(client:Protagonist){
    return this.httpClient.put(this.baseurl+"update/", client);
  }

  createProtagonist(client:Protagonist){
    return this.httpClient.post(this.baseurl+"add/", client);
  }

  deleteProtagonist(id:number){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }
}
