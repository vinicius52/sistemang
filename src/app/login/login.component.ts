import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { LoginService } from './login.service'; //

@Component({ /* Ele precisa conectar com o login service*/
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService] // Contém um vetor de login para todos esses componentes, ou seja o login
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [LoginComponent]
})

export class LoginComponent implements OnInit {

    email: string;
    senha: string;

    constructor(private loginService: LoginService) {
    }

    ngOnInit(): void {       
    }

    logar() {
        this.loginService.login(this.email,this.senha);
    }

}