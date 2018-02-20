import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../services/turma.service';
import { Turma } from '../models/turma';
import {Location} from '@angular/common';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

  turmas: Turma[] = [];
  loaded = false;

  constructor(
    private turmasService: TurmaService,
    private _location: Location
  ) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    this.turmasService.getAll().subscribe(data => {
      this.turmas = data;
      setTimeout(() => {
        this.loaded = true;
      }, 300);
    }, err => {
      console.log(err);
    });
  }

}
