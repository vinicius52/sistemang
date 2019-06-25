export class Cliente {

    constructor(key: string = null, nome: string = null, dataNascimento: any = null, descricao: any = null,
        quantidade: any = null) {
        this.key = key;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.descricao = descricao;
        this.quantidade = quantidade;
    }

    key: string;
    nome: string;
    dataNascimento:any;
    descricao: any;
    quantidade: any;

}