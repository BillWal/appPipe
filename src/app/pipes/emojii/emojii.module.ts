import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiiPipe } from './emojii.pipe';

@NgModule({
  declarations: [
    EmojiiPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [EmojiiPipe]
})
export class EmojiiModule { }
