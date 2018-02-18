import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';


import { AppComponent } from './app.component';
import { EscolaComponent } from './escola/escola.component';
import { TurmaComponent } from './turma/turma.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EscolaService } from './services/escola.service';
import { TurmaService } from './services/turma.service';
import { HttpClientModule } from '@angular/common/http';
import { EscolaDetalheComponent } from './escola/detalhe/escola-detalhe.component';
import { TurmaEditComponent } from './turma/edit/turma-edit.component';
import { TurmaDeleteComponent } from './turma/delete/turma-delete.component';
import { TurmaCreateComponent } from './turma/create/turma-create.component';
import { EscolaDeleteComponent } from './escola/delete/escola-delete.component';
import { EscolaCreateComponent } from './escola/create/escola-create.component';
import { EscolaEditComponent } from './escola/edit/escola-edit.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    TurmaComponent,
    HomeComponent,
    NavigationComponent,
    EscolaDetalheComponent,
    TurmaEditComponent,
    TurmaDeleteComponent,
    TurmaCreateComponent,
    EscolaDeleteComponent,
    EscolaCreateComponent,
    EscolaEditComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule

  ],

  entryComponents: [
    TurmaEditComponent,
    TurmaDeleteComponent,
    TurmaCreateComponent,
    EscolaCreateComponent,
    EscolaEditComponent,
    EscolaDeleteComponent
  ],

  providers: [
    EscolaService,
    TurmaService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
