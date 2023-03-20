import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = ""
  detailsToggled: boolean = false
  clickTimestamps: Array<Date> = []

  onResetUsername() {
    this.username = ""
  }

  onDetailsToggled() {
    this.detailsToggled = !this.detailsToggled
    this.clickTimestamps.push(new Date())
  }

  getBackgroundColor(index: number) {
    return index >= 4 ? "blue" : "transparent"
  }

  getFontColor(index: number) {
    return index >= 4
  }
}
