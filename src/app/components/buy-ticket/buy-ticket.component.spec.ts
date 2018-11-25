import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreeningsService } from '../../services/screenings.service';
import { MoviesService } from '../../services/movies.service';
import { Cinema } from '../../classes/cinema';
import { Movie } from '../../classes/movie';
import { Screening } from '../../classes/screening';



import { BuyTicketComponent } from './buy-ticket.component';

describe('BuyTicketComponent', () => {
  let component: BuyTicketComponent;
  let fixture: ComponentFixture<BuyTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
