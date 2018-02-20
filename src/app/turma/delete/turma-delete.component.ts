import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Turma } from '../../models/turma';
import { TurmaService } from '../../services/turma.service';

@Component({
  selector: 'app-turma-delete',
  templateUrl: './turma-delete.component.html',
  styles: []
})
export class TurmaDeleteComponent implements OnInit {

  turma: Turma = new Turma();
  escolaId = '';
  constructor(
    private dialogRef: MatDialogRef<TurmaDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private turmasService: TurmaService
  ) {
    this.turma = data.turma;
    this.escolaId = data.escolaId;
  }

  ngOnInit() {
  }

  save() {
    this.turmasService.deleteTurma(this.escolaId, this.turma.id).subscribe(data => {
      this.dialogRef.close({success: true, data: this.turma});
    }, err => {
      this.dialogRef.close({success: false, data: null});
    });
  }

  dismiss(){
    this.dialogRef.close(null)
  }

}
