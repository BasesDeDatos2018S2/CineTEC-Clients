import { Component, OnInit, Input } from '@angular/core';
import { Seat } from '../../classes/seat';
import { Client } from '../../classes/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {
  @Input() screening: string;



  fillColor: string = "#FF00FF";
  fillStateColor: string = "#FF99FF";
  strokeColor: string = "#000000";

  fillStateColors: string[] = [];
  sillones: string[] = [];
  filas: string[] = [];
  step: number;
  total_seats: number;
  selected_seats: Map<string, Seat>; // col,row
  client_id: string;
  client_verified: boolean;
  create_client: boolean;

  client:Client;




  constructor(private clientService: ClientsService) {


    // this.clientService.getClients().subscribe(data => {
    //   console.log("Clientes:", JSON.stringify(data));
    // });
    //

    this.step = 0;
    this.total_seats = 1;
    this.selected_seats = new Map<string, Seat>();
    this.filas = ["A", "B", "C", "E", "D", "F", "G"];//
    this.sillones = ["1", "2", "3", "4", "5", "6", "7", "8", "10"];//
    this.client_id = "";
    this.client_verified = false;
    this.create_client = false;
    this.client= new Client("","","","","","",[]);
  }

  ngOnInit() {
    console.log("current page", this.screening);

  }

  nextStep() {

      if (this.step < 3) {
        this.step++;
      }
      else {
        this.step = 3;
      }
    }


  previousStep() {


    if (this.step > 0) {
      this.step--;
    }
    else {
      this.step = 0;
    }

  }



  selectorAsiento(seat_id: string, col: number, row: number) {
    let seat = new Seat(col, row);
    if (this.selected_seats.has(seat_id)) {
      this.selected_seats.delete(seat_id);


    }
    else {


      if (this.selected_seats.size < this.total_seats) {
        this.selected_seats.set(seat_id, seat);

      }


    }

console.log(this.getCurrentSeats());
  }





  getStatusColor(seat_id: string) {

    let color: string = "#555555";
    if (this.selected_seats.has(seat_id)) {
      color = "#1fb51c";
    }
    return color;
  }

  verifyClientId() {
    this.client_verified = true;
    console.log("client id", this.client_id);


    console.log("updateClientList");
    this.clientService.getClient(this.client_id).subscribe(data => {
      console.log("dataV:", data);
      this.client = data;
    });


  }

  showCreateClient() {
    this.create_client = true;

  }

  submitNewClient() {
    console.log('cliente creado');
  }

  cancelCreateClient() {
    this.create_client = false;
  }

  getCurrentSeats(){
    let result:string = "";
    this.selected_seats.forEach( (value: Seat, key: string) =>  {
      result = result.concat(key+", ");
    }
  );

  result = result.substring(0,result.lastIndexOf(","));
return result  }

}
