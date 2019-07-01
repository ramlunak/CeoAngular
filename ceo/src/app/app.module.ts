import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import {RouterModule,Routes} from '@angular/router';
import { UsuariosComponent } from './tablero/usuarios/usuarios.component';

import {RolesService} from './services/roles.service'

const routes:Routes = [
  { path: 'menu', component: MenuComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot(routes)
  ],
  providers: [
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
