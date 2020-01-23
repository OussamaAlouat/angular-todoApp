import { Component } from '@angular/core';
import { Activity } from '../models/activity';
import { v4 as uuid } from 'uuid';
import { TodoService } from '../services/todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'add-component',
  templateUrl: './add.component.html',
  providers: [TodoService]
})
export class AddComponent {
  public activity: Activity;
  constructor(
    private _todoService: TodoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.activity = new Activity ('','', '',new Date(), false);
  }

  addActivity() {
    this.activity.id = uuid();
    this._todoService.addNewActivity(this.activity);
    this._router.navigate(['/todo-list'])
  }
}
