import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePlayerRouting } from './create-player-routing';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CreatePlayerRouting
  ]
})
export class CreatePlayerModule { }
