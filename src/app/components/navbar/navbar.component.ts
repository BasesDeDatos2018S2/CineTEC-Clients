import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cine:string;
  constructor() {
    this.cine = JSON.parse(localStorage.getItem('cinema'));
   }

  ngOnInit() {
  }

  selectCinema() {
    console.log("slected cinema:",this.cine);
    localStorage.setItem('cinema', JSON.stringify(this.cine));
  }


}
