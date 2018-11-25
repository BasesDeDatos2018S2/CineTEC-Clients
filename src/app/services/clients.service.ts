import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Client } from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"client/";
    console.log("ClientService works");
  }
  getClients(){
    return this.httpClient.get<Client[]>(this.baseurl);
  }
  getClient(id:string){
    console.log("pidiendo a", this.baseurl+id);
    return this.httpClient.get<Client>(this.baseurl+id);
  }
  updateClient(client:Client){
    return this.httpClient.put(this.baseurl+"update/", client);
  }

  createClient(client:Client){
    return this.httpClient.post(this.baseurl+"add/", client);
  }

  deleteClient(id:string){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }
}
