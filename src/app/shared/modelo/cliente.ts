export class Cliente {
    constructor(
        public id?: number,
        public cpf?: string,
        public nome?: string,
        public email?: string,
        public telefone?: string,
        public endereco?: string,
        public pet?: string,
        public ativo: boolean = true
    ) {}
}