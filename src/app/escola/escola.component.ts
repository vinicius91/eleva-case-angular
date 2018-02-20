import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import {Location} from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { EscolaService } from '../services/escola.service';
import { Escola } from '../models/escola';
import { EscolaCreateComponent } from './create/escola-create.component';
import { EscolaEditComponent } from './edit/escola-edit.component';
import { EscolaDeleteComponent } from './delete/escola-delete.component';


@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss']
})
export class EscolaComponent implements OnInit {

  escolas: Escola[] = [];
  loaded = false;
  constructor(
    private escolasService: EscolaService,
    private dialog: MatDialog,
    private _location: Location,
    public snackBar: MatSnackBar,
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
      this.setEscolas();
      this.handleResultResponse(result, 'criada');
    }
  }

  handleResultResponse(result, action) {
    if (result.success) {
      this.openSnackBar(`Escola ${result.data.nome} ${action} com sucesso!`);
    } else {
      this.openSnackBar(`Ocorreu algo de errado com a sua solicitação.`);
    }
  }

  setEscolas() {
    this.escolasService.getAll().subscribe(data => {
      this.escolas = data;
      setTimeout(() => {
        this.loaded = true;
      }, 300);
    }, err => {
      console.log(err);
    });
  }

  openCreateDialog(){
    const createDialogRef = this.dialog.open(EscolaCreateComponent, {
      width: '80%'
    });

    createDialogRef.afterClosed().subscribe(result => {
      this.handleResult(result);
    });
  }

  openEditDialog(escolaId){
    const editDialogRef = this.dialog.open(EscolaEditComponent, {
      width: '80%'
    });

    editDialogRef.afterClosed().subscribe(result => {
      this.handleResult(result);
    });
  }

  openDeleteDialog(escolaId){
    const deleteDialogRef = this.dialog.open(EscolaDeleteComponent, {
      width: '80%',
      data: {escolaId: escolaId}
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      this.handleResult(result);
    });
  }



  ngOnInit() {
    this.setEscolas();
  }

}
