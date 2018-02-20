import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { Turma } from '../../models/turma';
import { Escola } from '../../models/escola';
import { EscolaService } from '../../services/escola.service';
import { TurmaService } from '../../services/turma.service';
import { EscolaTurmaCount } from '../../models/escolaTurmaCount';

@Component({
  selector: 'app-turma-edit',
  templateUrl: './turma-edit.component.html',
  styles: []
})
export class TurmaEditComponent implements OnInit {

  turma: Turma = new Turma();
  numeroTurmas: EscolaTurmaCount[] = [];
  escolas: Escola[] = [];
  turmaForm: FormGroup;
  stringTurmas: string;
  loaded = false;

  constructor(
              private dialogRef: MatDialogRef<TurmaEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private escolaService: EscolaService,
              private turmasService: TurmaService
  )
    {
    this.turma = data.turma;
    this.escolaService.getAll().subscribe(data => {
      this.escolas = data;
    }, err => {
      console.log(err);
    });
    this.escolaService.getAllEscolaTurmaCount().subscribe(data => {
      this.numeroTurmas = data;
      this.alteraStringTurmas(this.turma.escolaId);
      this.loaded = true;

    }, err => {
      console.log(err);
    });

    this.turmaForm = this.fb.group({
      ano: ['', [Validators.required, Validators.min(1), Validators.max(9)]],
      numero: ['', [Validators.required]],
      etapa: ['', [Validators.required]],
      escola: ['', [Validators.required]]
    });


  }

  alteraStringTurmas(escolaId) {
    const escola = this.numeroTurmas.find(e => e.id === escolaId);
    this.stringTurmas = `A escola selecionada possui ${escola.numeroTurmas} turmas`;
  }

  ngOnInit() {
    this.turmaForm.patchValue({
      ano: this.turma.ano,
      numero: this.turma.numero,
      etapa: this.turma.etapa,
      escola: this.turma.escolaId
    });
    this.turmaForm.markAsTouched();
    this.escola.valueChanges.subscribe(value => {
      this.alteraStringTurmas(value);
    });

  }

  save(){
    this.dialogRef.close(this.turma);
  }

  dismiss(){
    this.dialogRef.close(null)
  }

  get ano() {return this.turmaForm.get('ano'); }
  get numero() {return this.turmaForm.get('numero'); }
  get escola() {return this.turmaForm.get('escola'); }
  get etapa() {return this.turmaForm.get('escola'); }


}
