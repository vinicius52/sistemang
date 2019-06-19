export class Produto {

    constructor(key: string = null, nome: string = null, preco: any = null) {
        this.key = key;
        this.nome = nome;
        this.preco = preco;
    }

    key: string;
    nome: string;
    preco: any;

}