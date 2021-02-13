import { CommonModule } from '@angular/common';
import { DummyListComponent } from './dummy-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DummyListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DummyListComponent }]),
    ReactiveFormsModule
  ]
})
export class DummyListModule { }
