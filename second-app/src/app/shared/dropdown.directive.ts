import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding("class.open")
  dropdownToggled: boolean = false

  @HostListener("click")
  onClick() {
    this.dropdownToggled = !this.dropdownToggled
  }

}
