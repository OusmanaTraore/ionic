import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEquipeComponent,
    ListEquipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
