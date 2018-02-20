import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Escola } from '../../models/escola';
import { EscolaService } from '../../services/escola.service';

@Component({
  selector: 'app-escola-delete',
  templateUrl: './escola-delete.component.html',
  styles: []
})
export class EscolaDeleteComponent implements OnInit {


  escolaId = '';
  escola: Escola = new Escola();
  constructor(
    private dialogRef: MatDialogRef<EscolaDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private escolasService: EscolaService
  ) { this.escolaId = data.escolaId;
      this.escola = data.escola;
  }

  ngOnInit() {
  }

  save() {
    this.escolasService.deleteEscola(this.escolaId).subscribe(data => {
      this.dialogRef.close({success: true, data: this.escola});
    }, err => {
      this.dialogRef.close({success: false, data: null});
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
