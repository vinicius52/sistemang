import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component'; /* 1° importar o Login Component e depois importar 
no imports*/

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth  } from '@angular/fire/auth';

import { AuthGuard } from "./guards/auth.guard";

import { LoginService } from "./login/login.service"

import { environment } from '../environments/environment';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ClienteComponent,
    LoginComponent,
    ProdutoComponent,
    CadastroComponent
  ],
  providers: [AuthGuard, LoginService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
