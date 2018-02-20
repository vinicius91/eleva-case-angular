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
          MatSelectModule,
          MatSnackBarModule

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
    MatSelectModule,
    MatSnackBarModule
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
    MatSelectModule,
    MatSnackBarModule
  ],
})

export class MaterialModule { }
