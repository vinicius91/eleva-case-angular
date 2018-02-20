import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { Escola } from '../../models/escola';
import { EscolaService } from '../../services/escola.service';



@Component({
  selector: 'app-escola-create',
  templateUrl: './escola-create.component.html',
  styles: []
})
export class EscolaCreateComponent implements OnInit {


  escola: Escola = new Escola();
  escolaForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EscolaCreateComponent>,
    private fb: FormBuilder,
    private escolasService: EscolaService,
  ) {}

  ngOnInit() {
    this.escolaForm = this.fb.group({
      nome: ['', [Validators.required]]
    });
  }

  save() {
    this.escola.nome = this.escolaForm.value.nome;
    this.escolasService.addEscola(this.escola).subscribe(data => {
      this.dialogRef.close({success: true, data: data});
    }, err => {
      this.dialogRef.close({success: false, data: null});
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  get nome() {return this.escolaForm.get('nome'); }


}
