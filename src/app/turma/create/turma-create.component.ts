import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Turma } from '../../models/turma';

@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styles: []
})
export class TurmaCreateComponent implements OnInit {

  turma: Turma = new Turma();
  constructor(private dialogRef: MatDialogRef<TurmaCreateComponent>) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.turma);
  }

  dismiss(){
    this.dialogRef.close(null)
  }

}
