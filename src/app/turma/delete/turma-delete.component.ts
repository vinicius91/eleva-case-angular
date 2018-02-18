import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Turma } from '../../models/turma';

@Component({
  selector: 'app-turma-delete',
  templateUrl: './turma-delete.component.html',
  styles: []
})
export class TurmaDeleteComponent implements OnInit {

  turma: Turma = new Turma();
  constructor(private dialogRef: MatDialogRef<TurmaDeleteComponent>) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.turma);
  }

  dismiss(){
    this.dialogRef.close(null)
  }

}
