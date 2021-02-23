import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader/loader.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [LoaderComponent, ToolbarComponent, HeroComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    LoaderComponent,
    HeroComponent,
    ToolbarComponent,
  ]
})

export class SharedModule { }
