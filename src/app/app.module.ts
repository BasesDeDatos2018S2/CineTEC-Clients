import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScreeningsComponent } from './components/screenings/screenings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';

import { ClientsService } from './services/clients.service';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    ScreeningsComponent,
    NavbarComponent,
    BuyTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
