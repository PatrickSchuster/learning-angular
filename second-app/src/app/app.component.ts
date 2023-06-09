import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentNavigation: string = "recipe"

  onNavigationChanged(target: string) {
    this.currentNavigation = target
  }
}
