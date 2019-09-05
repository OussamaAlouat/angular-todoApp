import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo.component';
import { HomeComponent } from './components/home.component';
import { AddComponent } from './components/add.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
