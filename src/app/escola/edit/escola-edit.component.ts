import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Escola } from '../../models/escola';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-escola-edit',
  templateUrl: './escola-edit.component.html',
  styles: []
})
export class EscolaEditComponent implements OnInit {

  escola: Escola = new Escola()
  constructor(
    private dialogRef: MatDialogRef<EscolaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log('init');
    console.log(this.data);
  }

  save(){
    this.dialogRef.close(this.escola);
  }

  dismiss(){
    this.dialogRef.close(null)
  }

}
