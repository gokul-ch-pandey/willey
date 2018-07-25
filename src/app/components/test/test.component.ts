import { Component } from '@angular/core';

@Component({
  selector: 'test-tag',
  templateUrl: 'test.component.html',
  styles: [`
  button {
    position: fixed;
    bottom: 70px;
    float: right;
    right: 10px;
    z-index: 10;
  }`]
})

export class TestComponent {

}
