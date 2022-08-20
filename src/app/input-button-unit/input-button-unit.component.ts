import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  //templateUrl: './input-button-unit.component.html',
  template: `
  <!-- <p>
    input-button-unit works!
    The title is: {{ title }}
  </p> -->

  <input #inputElementRef [value] = "title" (keyup.enter)="changeTitle($event.target.value)">

  <button (click)="changeTitle(inputElementRef.value)">Save</button>

  `
  ,
  styleUrls: ['./input-button-unit.component.scss']
})

export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() {}


  ngOnInit(): void {

  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
    console.log(newTitle);
  }

}
