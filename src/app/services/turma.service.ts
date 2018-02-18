import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Turma } from '../models/turma';

@Injectable()
export class TurmaService {

  private escolasUrl = 'http://localhost:6058/api/escolas';

  constructor(private http: HttpClient) { }

  getAllByEscolaId(escolaId: string): Observable<Turma[]>{
    return this.http.get<Turma[]>(this.escolasUrl + '/' + escolaId + '/turmas' );
  }

  getByEscolaIdAndTurmaId(escolaId: string, turmaId: string){
    return this.http.get<Turma>(this.escolasUrl + '/' + escolaId + '/turmas/' + turmaId  );
  }

}
