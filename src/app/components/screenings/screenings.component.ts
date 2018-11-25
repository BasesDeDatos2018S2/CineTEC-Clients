import { Component, OnInit } from '@angular/core';
import { ScreeningsService } from '../../services/screenings.service';
import { Movie } from '../../classes/movie';
import { Client } from '../../classes/client';
import { Room } from '../../classes/room';

@Component({
  selector: 'app-screenings',
  templateUrl: './screenings.component.html',
  styleUrls: ['./screenings.component.css']
})
export class ScreeningsComponent implements OnInit {
  movies_list:Movie[];
  cinema:number;
  rooms:Map<number, Room>;
  selected:boolean;
  constructor( private screeningService: ScreeningsService ) {
    this.selected=false;
    this.movies_list=[];
    this.rooms= new Map<number, Room>();
    this.cinema = JSON.parse(localStorage.getItem('cinema'));
    this.updateMovieList();

   }
   // localStorage.setItem('cinema', JSON.stringify(this.cinema));

  ngOnInit() {
  }

selectScreening(id:number){
  localStorage.setItem('screening', JSON.stringify(id));
  this.selected=true;
}
  updateMovieList(){
    console.log("updateClientList");
    this.screeningService.getAvailableScreenings(this.cinema).subscribe(data => {
      console.log("data:", data);
      this.movies_list = data;
    });
  }

}
