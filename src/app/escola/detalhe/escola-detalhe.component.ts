import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { EscolaService } from '../../services/escola.service';
import { Escola } from '../../models/escola';
import { Turma } from '../../models/turma';
import { TurmaService } from '../../services/turma.service';
import { TurmaEditComponent } from '../../turma/edit/turma-edit.component';
import { TurmaDeleteComponent } from '../../turma/delete/turma-delete.component';
import { TurmaCreateComponent } from '../../turma/create/turma-create.component';

@Component({
  selector: 'app-escola-detalhe',
  templateUrl: './escola-detalhe.component.html',
  styles: []
})
export class EscolaDetalheComponent implements OnInit {

  escola: Escola = new Escola();
  turmas: Turma[] = [];
  loaded = false;
  escolaId = '';

  constructor(
    private route: ActivatedRoute,
    private escolaService: EscolaService,
    private turmaService: TurmaService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private _location: Location

  ) { }

  backClicked() {
    this._location.back();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  handleResult(result) {
    if (result != null){
      this.loaded = false;
      this.setTurmas(this.escolaId);
      this.handleResultResponse(result, 'criada');
    }
  }

  handleResultResponse(result, action) {
    if (result.success) {
      this.openSnackBar(`Turma ${result.data.nome} ${action} com sucesso!`);
    } else {
      this.openSnackBar(`Ocorreu algo de errado com a sua solicitação.`);
    }
  }

  openCreateDialog(){
    const createDialogRef = this.dialog.open(TurmaCreateComponent, {
      width: '80%'
    });

    createDialogRef.afterClosed().subscribe(result => {
      this.handleResult(result);
    });
  }

  openEditDialog(escolaId, turmaId){
    const editDialogRef = this.dialog.open(TurmaEditComponent, {
      width: '80%',
      data: {
        turma: this.turmas.find(x => x.id === turmaId),
        escolas: this.escola
      }
    });
    editDialogRef.afterClosed().subscribe(result => {
      this.handleResult(result);
    });
  }

  openDeleteDialog(escolaId, turmaId){
    const deleteDialogRef = this.dialog.open(TurmaDeleteComponent, {
      width: '80%',
      data: {escolaId: escolaId, turma: this.turmas.find(x => x.id === turmaId)}
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      this.handleResult(result);
    });
  }

  setEscola(escolaId){
    this.escolaService.getById(escolaId).subscribe(data => {
      this.escola = data;
    }, err => {
      console.log(err);
    });
  }

  setTurmas(escolaId){
    this.turmaService.getAllByEscolaId(escolaId).subscribe(data => {
      this.turmas = data;
      setTimeout(() => {
        this.loaded = true;
      }, 500);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.escolaId = params['escolaId'];
      this.setEscola(this.escolaId);
      this.setTurmas(this.escolaId);
    });

  }

}
