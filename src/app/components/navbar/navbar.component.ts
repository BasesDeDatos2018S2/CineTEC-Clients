import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from '../../classes/cinema';
import { CinemasService } from '../../services/cinemas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cinema:number;
  cinemas_list:Cinema[];

  constructor(private cinemasService: CinemasService) {
    this.cinemas_list=[];
    this.cinema = JSON.parse(localStorage.getItem('cinema'));
    this.updateCinemaList();
   }

  ngOnInit() {
  }

  selectCinema() {
    console.log("slected cinema:",this.cinema);
    localStorage.setItem('cinema', JSON.stringify(this.cinema));
  }


  updateCinemaList(){
    console.log("updateClientList");
    this.cinemasService.getCinemas().subscribe(data => {
      console.log("data:", data);
      this.cinemas_list = data;
    });
  }



}
