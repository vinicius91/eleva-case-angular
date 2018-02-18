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
          MatMenuModule,
          MatListModule,
          MatDialogModule,
          MatProgressBarModule,
          MatFormFieldModule,
          MatSelectModule

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
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule
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
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})

export class MaterialModule { }
