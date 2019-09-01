import {Component} from '@angular/core';
@Component({
  selector: 'todo',
  templateUrl: '../views/todo.component.html'
})

export class TodoComponent {
  public title: string;
  public activities: Array<any>;
  public activity: string;

  constructor() {
    this.title = 'TODO APP';
    this.activities = [];
    this.activity = '';
  }

  public addActivity() {
    const current = {
      date: new Date(),
      name: this.activity
    }
    this.activities.push(current);
    this.activity = '';
  }
}