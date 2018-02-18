import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http/src/module';



@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    TurmaComponent,
    HomeComponent,
    NavigationComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule

  ],

  providers: [
    EscolaService,
    TurmaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
