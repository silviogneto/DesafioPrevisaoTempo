import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaCidadeComponent } from './cidade/lista-cidade.component';
import { EditarCidadeComponent } from './cidade/editar-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCidadeComponent,
    EditarCidadeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListaCidadeComponent, pathMatch: 'full' },
      { path: 'cidade/editar', component: EditarCidadeComponent },
      { path: 'cidade/editar/:id', component: EditarCidadeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
