import { Injectable } from '@angular/core';
import { Escola } from '../models/escola';
import { HttpClient } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EscolaService {

  private _escolas: BehaviorSubject<Escola[]>;

  private dataStore: {
    escolas: Escola[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { escolas: []} ;
    this._escolas = new BehaviorSubject<Escola[]>([]);
   }

  get escolas(): Observable<Escola[]> {
    return this._escolas.asObservable();
  }

  getAll() {
    const escolasUrl = 'http://localhost:6858/api/escola';

    return this.http.get<Escola[]>(escolasUrl)
    .subscribe(data => {
      this.dataStore.escolas = data;
      this._escolas.next(Object.assign({}, this.dataStore.escolas));
    }, error => {
      console.log('Falhou na busca das escolas');
    });
   }
}
