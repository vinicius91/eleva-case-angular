import { Injectable } from '@angular/core';
import { Escola } from '../models/escola';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class EscolaService {


  private escolasUrl = 'http://localhost:6058/api/escolas';


  constructor(private http: HttpClient) {
   }


  getAll(): Observable<Escola[]>{
    return this.http.get<Escola[]>(this.escolasUrl);
  }

  getById(escolaId: string): Observable<Escola>{
    return this.http.get<Escola>(this.escolasUrl + '/' + escolaId);
  }



}
