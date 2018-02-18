import { Component, OnInit } from '@angular/core';
import { EscolaService } from '../services/escola.service';
import { Observable } from 'rxjs/Observable';
import { Escola } from '../models/escola';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss']
})
export class EscolaComponent implements OnInit {

  escolas: Observable<Escola[]>;
  constructor(private escolaService: EscolaService) { }

  ngOnInit() {
    this.escolas = this.escolaService.escolas;
    this.escolaService.getAll();

    this.escolas.subscribe(data => {
      console.log(data);
    });
  }

}
