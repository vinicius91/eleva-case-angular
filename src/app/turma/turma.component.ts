import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';


import { TurmaService } from '../services/turma.service';
import { Turma } from '../models/turma';
import { TurmaCreateComponent } from './create/turma-create.component';
import { TurmaEditComponent } from './edit/turma-edit.component';
import { TurmaDeleteComponent } from './delete/turma-delete.component';
import { Escola } from '../models/escola';


@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

  turmas: Turma[] = [];
  loaded = false;

  constructor(
    private turmasService: TurmaService,
    private _location: Location,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.setTurmas();
  }

  backClicked() {
    this._location.back();
  }

  setTurmas() {
    this.turmasService.getAll().subscribe(data => {
      this.turmas = data;
      setTimeout(() => {
        this.loaded = true;
      }, 300);
    }, err => {
      console.log(err);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  handleResult(result, action) {
    if (result != null && result !== undefined) {
      this.loaded = false;
      this.setTurmas();
      this.handleResultResponse(result, action);
    }
  }

  handleResultResponse(result, action) {
    if (result.success) {

      this.openSnackBar(`${result.data.nomeCompleto} ${action} com sucesso!`);
    } else {
      this.openSnackBar(`Ocorreu algo de errado com a sua solicitação.`);
    }
  }

  openCreateDialog() {
    const createDialogRef = this.dialog.open(TurmaCreateComponent, {
      width: '80%'
    });

    createDialogRef.afterClosed().subscribe(result => {
      this.handleResult(result, 'criada');
    });
  }

  openEditDialog(escolaId, turmaId) {
    const turma = this.turmas.find(x => x.id === turmaId);
    const escola = new Escola();
    escola.nome = turma.escola;
    escola.id = turma.escolaId;
    const editDialogRef = this.dialog.open(TurmaEditComponent, {
      width: '80%',
      data: {
        turma: turma,
        escolas: escola
      }
    });
    editDialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result != null && result !== undefined) {
        result.data = turma;
      }
      this.handleResult(result, 'editada');
    });
  }

  openDeleteDialog(escolaId, turmaId) {
    const deleteDialogRef = this.dialog.open(TurmaDeleteComponent, {
      width: '80%',
      data: {escolaId: escolaId, turma: this.turmas.find(x => x.id === turmaId)}
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      this.handleResult(result, 'deletada');
    });
  }



}
