import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.Native
})

export class DropdownComponent {
  dixh = 'Privet!';
  random;
  public randomize() {
    this.random = Math.floor(Math.random() * 10);
    console.log(this.random);
  }

  openList() {
    console.log('ZZdarowa!');
  }
}
