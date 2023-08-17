import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import { ReducerComponent } from './reducer/reducer.component';



@NgModule({
  declarations: [
    ActionComponent,
    ReducerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StateModule { }
