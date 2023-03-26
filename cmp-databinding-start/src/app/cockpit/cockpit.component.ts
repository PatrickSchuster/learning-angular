import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()
  serverAdded = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output()
  blueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>()

  @ViewChild("serverContentInput", {static: true})
  serverContentInput

  ngOnInit(): void {
  }

  onAddServer(inputEl: HTMLInputElement) {
    console.log(this.serverContentInput)
    this.serverAdded.emit({
      serverName: inputEl.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(inputEl: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: inputEl.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
