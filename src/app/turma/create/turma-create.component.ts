import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { Turma } from '../../models/turma';
import { Escola } from '../../models/escola';
import { EscolaService } from '../../services/escola.service';
import { TurmaService } from '../../services/turma.service';
import { EscolaTurmaCount } from '../../models/escolaTurmaCount';
import { error } from 'selenium-webdriver';



@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styles: []
})
export class TurmaCreateComponent implements OnInit {

  turma: Turma = new Turma();
  escolas: Escola[] = [];
  numeroTurmas: EscolaTurmaCount[] = [];
  stringTurmas: string;
  turmaForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<TurmaCreateComponent>,
    private fb: FormBuilder,
    private escolaService: EscolaService,
    private turmasService: TurmaService

  ) {

    this.escolaService.getAll().subscribe(data => {
      this.escolas = data;
    }, err => {
      console.log(err);
    });
    this.escolaService.getAllEscolaTurmaCount().subscribe(data => {
      this.numeroTurmas = data;
    }, err => {
      console.log(err);
    });
  }

  alteraStringTurmas(escolaId) {
    const escola = this.numeroTurmas.find(e => e.id === escolaId);
    this.stringTurmas = `A escola selecionada possui ${escola.numeroTurmas} turmas`;
  }

  ngOnInit() {
    this.turmaForm = this.fb.group({
      ano: ['', [Validators.required, Validators.min(1), Validators.max(9)]],
      numero: ['', [Validators.required]],
      etapa: ['', [Validators.required]],
      escola: ['', [Validators.required]]
    });

    this.escola.valueChanges.subscribe(value => {
      this.alteraStringTurmas(value);
    });
  }

  save() {
    const turma = new Turma();
    turma.escolaId = this.turmaForm.value.escola;
    turma.ano = this.turmaForm.value.ano;
    turma.numero = this.turmaForm.value.numero;
    turma.etapa = this.turmaForm.value.etapa;
    this.turmasService.addTurma(turma.escolaId, turma).subscribe(data => {
      this.dialogRef.close({success: true, data: data});
    }, err => {
      this.dialogRef.close({success: false, data: null});
    });
  }

  dismiss(){
    this.dialogRef.close(null)
  }

  get ano() {return this.turmaForm.get('ano'); }
  get numero() {return this.turmaForm.get('numero'); }
  get escola() {return this.turmaForm.get('escola'); }
  get etapa() {return this.turmaForm.get('escola'); }



}
