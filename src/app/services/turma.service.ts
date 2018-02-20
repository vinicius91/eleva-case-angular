import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry} from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Turma } from '../models/turma';

@Injectable()
export class TurmaService {

  private escolasUrl = 'http://elevacaseapi.azurewebsites.net/api/escolas';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllByEscolaId(escolaId: string): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.escolasUrl + '/' + escolaId + '/turmas' );
  }

  getByEscolaIdAndTurmaId(escolaId: string, turmaId: string) {
    return this.http.get<Turma>(this.escolasUrl + '/' + escolaId + '/turmas/' + turmaId  );
  }

  getAll() {
    return this.http.get<Turma[]>(this.escolasUrl + '/null/turmas/all');
  }

  addTurma (escolaId: string, turma: Turma) {
    const json = {
      etapa: turma.etapa,
      numero: turma.numero,
      ano: turma.ano
    };
    return this.http.post<Turma>(`${this.escolasUrl}/${escolaId}/turmas`, json, this.httpOptions);
  }

  updateTurma (escolaId: string, turmaId: string, turma: Turma) {
    const json = {
      etapa: turma.etapa,
      numero: turma.numero,
      ano: turma.ano,
      escolaId: turma.escolaId
    };
    return this.http.put<Turma>(`${this.escolasUrl}/${escolaId}/turmas/${turmaId}`, json, this.httpOptions);
  }

  deleteTurma (escolaId: string, turmaId: string) {

    return this.http.delete(`${this.escolasUrl}/${escolaId}/turmas/${turmaId}`);
  }

}
