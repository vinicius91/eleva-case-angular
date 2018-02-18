import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Escola } from '../../models/escola';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-escola-create',
  templateUrl: './escola-create.component.html',
  styles: []
})
export class EscolaCreateComponent implements OnInit {

  anoFormControl = new FormControl('', [
    Validators.required
  ]);
  escola: Escola = new Escola();
  matcher = new MyErrorStateMatcher();
  constructor(private dialogRef: MatDialogRef<EscolaCreateComponent>) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.escola);
  }

  dismiss(){
    this.dialogRef.close(null)
  }
}
