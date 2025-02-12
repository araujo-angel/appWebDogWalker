export class Walker {
    constructor(
        public nome?: string,
        public email?: string,
        public telefone?: string,
        public endereco?: string,
        public regiaoTranalho?: string,
        public ativo: boolean | undefined = undefined
    ) {}
}