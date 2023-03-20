import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = "No server has been created"
  serverName = "Test server"

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = `Server has been created. Name is ${this.serverName}`
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value
  }
}
