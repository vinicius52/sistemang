import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component'
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [

  // Faz a rota do Login
  { 
    path: 'sistema',    
    //canActivate: [AuthGuard], 
    children: [
      // cria para acessar o angular
      { path: 'cliente', component: ClienteComponent},
      { path: 'produto', component: ProdutoComponent},
      { path: 'cadastro', component: CadastroComponent},
    ]
  },
  { path: 'cliente', component: ClienteComponent},  
  { path: 'login', component: LoginComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
