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
  serverCreated = false
  servers = [
    "testserver1",
    "testserver2",
    "testserver3",
  ]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = `Server has been created. Name is ${this.serverName}`
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value
  }
}
