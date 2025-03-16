export class Cliente {
    constructor(
        public cpf?: string,
        public nome?: string,
        public email?: string,
        public telefone?: string,
        public endereco?: string,
        public pets?: string[],
        public ativo: boolean = true
    ) {}
}