import {Component} from '@angular/core';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';

import { Activity } from '../models/activity';
@Component({
  selector: 'todo',
  templateUrl: '../views/todo.component.html'
})

export class TodoComponent {
  public title: string;
  public activities: Array<Activity>;
  public activity: Activity;
  public faTrash;
  public faCheck;
  public name: string;

  constructor() {
    this.title = 'TODO APP';
    this.activities = [];
    this.activity = new Activity('', '', new Date(), false);
    this.faCheck = faCheck;
    this.faTrash = faTrash;
    this.name = '';
  }

  public addActivity() {
    this.activity = new Activity(uuid(), this.name,new Date(), false);
    this.activities.push(this.activity);
    this.name = '';
  }

  removeActivity(activity) {
    this.activities = this.activities.filter((val)=> val.id !== activity.id)
  }

  changeActivityStatus(activity) {
    this.activities = this.activities.map((val) => {
      if (activity.id === val.id ) {
        val.completed = !activity.completed;
      }

      return val;
    })
  }
}
