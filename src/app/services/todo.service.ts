import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
@Injectable()
export class TodoService {
  addNewActivity(activity: Activity) {
    const data = localStorage.getItem('activities');
    if (!data) {
      const activities = [];
      activities.push(activity);
      localStorage.setItem('activities', JSON.stringify(activities));
    } else {
      const activities = JSON.parse(data);
      activities.push(activity);
      localStorage.setItem('activities', JSON.stringify(activities));
    }
  }

  getActivities() {
    const activities = localStorage.getItem('activities');
    if (!activities) {
      return [];
    } else {
      return JSON.parse(activities);
    }
  }

  uploadActivities(activities) {
    const activitiesToUpload = JSON.stringify(activities);
    localStorage.setItem('activities', activitiesToUpload);
  }
}