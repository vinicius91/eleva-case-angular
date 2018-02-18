import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EscolaComponent } from './escola/escola.component';
import { TurmaComponent } from './turma/turma.component';
import { EscolaDetalheComponent } from './escola/detalhe/escola-detalhe.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'escolas', component: EscolaComponent},
  {path: 'escolas/:escolaId', component: EscolaDetalheComponent},
  {path: 'turmas', component: TurmaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
