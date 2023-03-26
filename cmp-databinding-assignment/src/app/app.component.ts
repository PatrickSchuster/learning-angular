import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: Array<number> = []

  onIncrement(event: { incrementNr: number}) {
    this.numbers.push(event.incrementNr)
  }
}
