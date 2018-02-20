import { Injectable } from '@angular/core';
import { Escola } from '../models/escola';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { EscolaTurmaCount } from '../models/escolaTurmaCount';

@Injectable()
export class EscolaService {


  private escolasUrl = 'http://localhost:6058/api/escolas';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
   }


  getAll(): Observable<Escola[]> {
    return this.http.get<Escola[]>(this.escolasUrl);
  }

  getById(escolaId: string): Observable<Escola> {
    return this.http.get<Escola>(this.escolasUrl + '/' + escolaId);
  }

  getAllEscolaTurmaCount(): Observable<EscolaTurmaCount[]> {
    return this.http.get<EscolaTurmaCount[]>(this.escolasUrl + '/turmasCount');
  }

  addEscola(escola: Escola) {
    const json = {
      nome: escola.nome
    };
    return this.http.post<Escola>(this.escolasUrl, json, this.httpOptions);
  }

  updateEscola(escola: Escola, escolaId: string) {
    const json = {
      nome: escola.nome
    };
    return this.http.put<Escola>(`${this.escolasUrl}/${escolaId}`, json, this.httpOptions);
  }

  deleteEscola (escolaId: string) {

    return this.http.delete(`${this.escolasUrl}/${escolaId}`);
  }



}
