import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Turma } from '../../models/turma';

@Component({
  selector: 'app-turma-edit',
  templateUrl: './turma-edit.component.html',
  styles: []
})
export class TurmaEditComponent implements OnInit {

  turma: Turma = new Turma();
  constructor(private dialogRef: MatDialogRef<TurmaEditComponent>) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.turma);
  }

  dismiss(){
    this.dialogRef.close(null)
  }
}
