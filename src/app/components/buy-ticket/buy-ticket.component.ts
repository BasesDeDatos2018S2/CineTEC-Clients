import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {
  @Input() screening:string;
  step:number;
  total_seats:number;
  constructor() {
    this.step=0;
    this.total_seats=1;
}
  ngOnInit() {
    console.log("current page",this.screening);

  }
  nextStep(){

    if (this.total_seats>0) {
      if(this.step<3){
        this.step++;
      }
      else{
        this.step=3;
      }

    }

  }

  previousStep(){


      if(this.step>0){
        this.step--;
      }
      else{
        this.step=0;
      }

    }



}
