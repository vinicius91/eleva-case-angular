import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EscolaService } from '../../services/escola.service';
import { Escola } from '../../models/escola';
import { Turma } from '../../models/turma';
import { TurmaService } from '../../services/turma.service';
import { MatDialog, MatDialogRef } from '@angular/material';
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

  constructor(
    private route: ActivatedRoute,
    private escolaService: EscolaService,
    private turmaService: TurmaService,
    private dialog: MatDialog

  ) { }


  openCreateDialog(){
    const createDialogRef = this.dialog.open(TurmaCreateComponent, {
      width: '80%'
    });

    createDialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed', result);
    })
  }

  openEditDialog(escolaId, turmaId){
    const editDialogRef = this.dialog.open(TurmaEditComponent, {
      width: '80%'
    });

    editDialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed', result);
    })
  }

  openDeleteDialog(escolaId, turmaId){
    const deleteDialogRef = this.dialog.open(TurmaDeleteComponent, {
      width: '80%'
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed', result);
    })
  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      const escolaId = params['escolaId'];
      this.escolaService.getById(escolaId).subscribe(data => {
        this.escola = data;
      }, err => {
        console.log(err);
      });
      this.turmaService.getAllByEscolaId(escolaId).subscribe(data => {
        this.turmas = data;
        setTimeout(() => {
          this.loaded = true;
        }, 500);
      }, err => {
        console.log(err);
      })
    });

  }

}
