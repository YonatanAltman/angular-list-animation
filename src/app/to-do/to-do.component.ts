import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { listAnimation } from './list.animation';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  animations: listAnimation
})
export class ToDoComponent implements OnInit {
  title = 'My to do list';
  list = [];
  constructor() {}

  ngOnInit() {}

  add(str) {
    this.list.push(str);
  }

  deleteItem(str: string) {
    this.list = this.list.filter((i) => i !== str);
  }
}
