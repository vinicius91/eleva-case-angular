import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

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
    private escolaService: EscolaService,
    private dialog: MatDialog
  ) { }

  openCreateDialog(){
    const createDialogRef = this.dialog.open(EscolaCreateComponent, {
      width: '80%'
    });

    createDialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed', result);
    })
  }

  openEditDialog(escolaId){
    const editDialogRef = this.dialog.open(EscolaEditComponent, {
      width: '80%'
    });

    editDialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed', result);
    })
  }

  openDeleteDialog(escolaId){
    const deleteDialogRef = this.dialog.open(EscolaDeleteComponent, {
      width: '80%'
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed', result);
    })
  }



  ngOnInit() {
    this.escolaService.getAll().subscribe(data => {
      console.log(data);
      this.escolas = data;
      setTimeout(() => {
        this.loaded = true;
      }, 300);
    }, err => {
      console.log(err);
    });
  }

}
