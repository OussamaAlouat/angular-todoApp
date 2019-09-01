import {Component} from '@angular/core';
@Component({
  selector: 'todo',
  templateUrl: '../views/todo.component.html'
})

export class TodoComponent {
  public title: string;
  public activities: Array<string>;
  public activity: string;

  constructor() {
    this.title = 'TODO APP';
    this.activities = [];
    this.activity = '';
  }

  public addActivity() {
    this.activities.push(this.activity);
  }
}