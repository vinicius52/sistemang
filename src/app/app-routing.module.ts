import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component'
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { AuthGuard} from './guards/auth.guard'

const routes: Routes = [

  // App routes goes here here
  { 
    path: 'sistema',    
    //canActivate: [AuthGuard], 
    children: [
      { path: 'cliente', component: ClienteComponent},
      { path: 'produto', component: ProdutoComponent}
    ]
  },
  { path: 'cliente', component: ClienteComponent},  
  { path: '', component: LoginComponent},
  { path: 'produto', component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
