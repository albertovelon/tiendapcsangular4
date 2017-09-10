import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';


import { ClientesModule } from './clientes/clientes.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { IndexComponent } from './clientes/index/index.component';
import { AddComponent as PedidosAddComponent} from './pedidos/add/add.component';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

//configuracion de rutas, mediante un objeto que se especifica
const appRoutes: Routes = [
  { path: "clientes/index", component: IndexComponent },
  { path: "pedidos/add", component: PedidosAddComponent },
];

//fin de configuracion de rutas

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent

  ],
  imports: [
    BrowserModule,
    ClientesModule,
    PedidosModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
