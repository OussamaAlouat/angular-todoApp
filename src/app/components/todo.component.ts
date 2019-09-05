import {Component} from '@angular/core';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import { TodoService } from '../services/todo.service';

import { Activity } from '../models/activity';
@Component({
  selector: 'todo',
  templateUrl: '../views/todo.component.html',
  providers: [TodoService]
})

export class TodoComponent {
  public title: string;
  public activities: Array<Activity>;
  public faTrash;
  public faCheck;
  public countActivities:number;
  public numberOfCompleted: number;

  constructor(
    private _todoService: TodoService
  ) {
    this.title = 'TODO APP';
    this.activities = [];
    this.faCheck = faCheck;
    this.faTrash = faTrash;
  }

  removeActivity(activity) {
    this.activities = this.activities.filter((val)=> val.id !== activity.id)
    this._todoService.uploadActivities(this.activities);
    this.countActivities = this.activities.length;
    this.numberOfCompleted = this.getCompletedActivities();
  }

  changeActivityStatus(activity) {
    this.activities = this.activities.map((val) => {
      if (activity.id === val.id ) {
        val.completed = !activity.completed;
      }

      return val;
    });

    this._todoService.uploadActivities(this.activities);
    this.numberOfCompleted = this.getCompletedActivities();
  }

  ngOnInit() {
    this.loadActivities();
  }

  loadActivities() {
    this.activities= this._todoService.getActivities();
    this.countActivities = this.activities.length;
    this.getCompletedActivities();
    this.numberOfCompleted = this.getCompletedActivities();
  }

  getCompletedActivities() {
    const count = this.activities.filter((val) => val.completed).length;
    return count;
  }
}
