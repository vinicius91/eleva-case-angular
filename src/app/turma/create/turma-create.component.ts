import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Turma } from '../../models/turma';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styles: []
})
export class TurmaCreateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TurmaCreateComponent>,
    private fb: FormBuilder

  ) { }

  turma: Turma = new Turma();
  turmaForm: FormGroup;

  ngOnInit() {
    this.turmaForm = this.fb.group({
      ano: ['', [Validators.required, Validators.min(1), Validators.max(9)]],
      numero: ['', [Validators.required]],
      etapa: ['', [Validators.required]],
      escola: ['', [Validators.required]]
    });
    console.log(this.turmaForm.controls.ano);
  }

  save(){
    console.log(this.turmaForm);
    console.log('Saved: ' + JSON.stringify(this.turmaForm.value));
    this.dialogRef.close(this.turma);
  }

  dismiss(){
    this.dialogRef.close(null)
  }

}
