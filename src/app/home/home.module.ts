import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 20,
      innerStrokeWidth: 10,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#3200FF',
      animationDuration: 300,
      animation: false,
      responsive: true,
      renderOnClick: false
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
