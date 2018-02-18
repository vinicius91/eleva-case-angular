import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Escola } from '../../models/escola';

@Component({
  selector: 'app-escola-delete',
  templateUrl: './escola-delete.component.html',
  styles: []
})
export class EscolaDeleteComponent implements OnInit {

  escola: Escola = new Escola()
  constructor(private dialogRef: MatDialogRef<EscolaDeleteComponent>) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.escola);
  }

  dismiss(){
    this.dialogRef.close(null)
  }

}
