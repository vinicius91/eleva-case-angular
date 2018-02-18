import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
          MatButtonModule,
          MatToolbarModule,
          MatInputModule,
          MatProgressSpinnerModule,
          MatCardModule,
          MatDividerModule,
          MatIconModule,
          MatCheckboxModule,
          MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule
  ],
})

export class MaterialModule { }
