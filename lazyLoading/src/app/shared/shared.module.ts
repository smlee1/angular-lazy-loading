import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [FirstComponent]
})
export class SharedModule { }
