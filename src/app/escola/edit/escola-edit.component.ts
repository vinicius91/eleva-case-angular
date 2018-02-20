import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Escola } from '../../models/escola';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EscolaService } from '../../services/escola.service';

@Component({
  selector: 'app-escola-edit',
  templateUrl: './escola-edit.component.html',
  styles: []
})
export class EscolaEditComponent implements OnInit {

  escola: Escola = new Escola();
  escolaForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<EscolaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private escolasService: EscolaService,
    private fb: FormBuilder
  ) { this.escola = data.escola;
      this.escolaForm = this.fb.group({
        nome: ['', [Validators.required]]
      });
   }

  ngOnInit() {
    this.escolaForm.patchValue({
      nome: this.escola.nome
    });
    this.escolaForm.markAsTouched();
  }

  save() {
    this.escola.nome = this.escolaForm.value.nome;
    this.escolasService.updateEscola(this.escola, this.escola.id).subscribe(escola => {
      this.dialogRef.close({success: true, data: this.escola});
    }, err => {
      this.dialogRef.close({success: false, data: null});
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  get nome() {return this.escolaForm.get('nome'); }

}
