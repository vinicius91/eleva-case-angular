import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Escola } from '../../models/escola';

@Component({
  selector: 'app-escola-edit',
  templateUrl: './escola-edit.component.html',
  styles: []
})
export class EscolaEditComponent implements OnInit {

  escola: Escola = new Escola()
  constructor(private dialogRef: MatDialogRef<EscolaEditComponent>) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.escola);
  }

  dismiss(){
    this.dialogRef.close(null)
  }

}
