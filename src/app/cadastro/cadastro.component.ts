import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { Cadastro } from './cadastro.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [CadastroComponent]
})

export class CadastroComponent implements OnInit {

    cadastro: Cadastro;
    cadastroRef: AngularFireList<any>;
    cadastros: any[];

    constructor(private db: AngularFireDatabase) { }

    ngOnInit(): void {
        this.cadastro = new Cadastro(null,null,null);
        this.listar();
    }

    salvar() {
        if (this.cadastro.key == null) {
            this.db.list('cadastros').push(this.cadastro)
                .then((result: any) => {
                    console.log(result.key);
                });            
        } else {
            this.db.list('cadastros').update(this.cadastro.key,this.cadastro)
            .then((result: any) => {
                console.log(result.key);
            });  
        }
    }

    carregar(cadastro:Cadastro) {
        this.cadastro = new Cadastro(cadastro.key,
            cadastro.nome, cadastro.quantidade);
    }

    excluir(key:string){
        if (confirm('Deseja realmente excluir ?')){
        this.db.list('cadastros').remove(key)
            .then((result: any) => {
                console.log(result.key);
            });
            this.cadastro = new Cadastro(null, null, null);
        /*alert(key);*/
        }
    }

    listar() {        
        this.getAll().subscribe(
            cadastros => this.cadastros = cadastros,
            error => alert(error),
            () => console.log("terminou")
          );        
    }

    getAll() : Observable<any[]> {
        return this.db.list('cadastros')
          .snapshotChanges()
          .pipe(
            map(changes => {
              return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
      }


}