import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  @Output("increment")
  startClicked = new EventEmitter<{ incrementNr: number }>()

  intervalId: any
  incrementNr: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onStartClicked() {
    this.intervalId = setInterval(() => {
      this.startClicked.emit({ incrementNr: this.incrementNr })
      this.incrementNr++
    }, 1000)
  }

  onStopClicked() {
    clearInterval(this.intervalId)
  }

}
