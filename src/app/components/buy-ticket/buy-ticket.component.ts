import { Component, OnInit, Input } from '@angular/core';
import {Seat} from '../../classes/seat';
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
  statusColors: Map<string, string> = new Map<string, string>();
  step: number;
  total_seats: number;
  setected_seats:Map<number[],number>;
  constructor() {
    this.step = 0;
    this.total_seats = 1;
    this.setected_seats= new Map<number[],number>();

    for (var i = 0; i < 80; i++) {
      this.fillStateColors[i] = "#FFFFFF";
    }
    this.filas = ["A", "B", "C", "E", "D", "F", "G"];//
    this.sillones = ["1", "2", "3", "4", "5", "6", "7", "8", "10"];//

    for (let f of this.filas) {
      for (let s of this.sillones) {
        this.statusColors[f + s] = "#555555"
      }
    }

  }

  ngOnInit() {
    console.log("current page", this.screening);

  }
  nextStep() {

    if (this.total_seats > 0) {
      if (this.step < 3) {
        this.step++;
      }
      else {
        this.step = 3;
      }

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

  selectorAsiento(seat:string){
    if(this.statusColors[seat]== "#555555"){
      this.statusColors[seat]= "#1fb51c"
    }
    else{
      this.statusColors[seat]= "#555555"
    }
    console.log(seat);
  }

  getStatusColor(fila, sillon){

  return this.statusColors[fila+sillon]
  }



}
