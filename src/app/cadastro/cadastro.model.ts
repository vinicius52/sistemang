export class Cadastro {

    constructor(key: string = null, nome: string = null, quantidade: any = null) {
        this.key = key;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    key: string;
    nome: string;
    quantidade: any;

}