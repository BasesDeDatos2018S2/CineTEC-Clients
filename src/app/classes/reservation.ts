
import { Seat } from './seat';

export class Reservation {

  constructor(
    public Screening: number,
    public Client: string,
    public Butacas:Seat[]
  ) {  }
}
