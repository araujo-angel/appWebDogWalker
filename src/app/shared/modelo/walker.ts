export class Walker {
    constructor(
        public id?: number,
        public nome?: string,
        public email?: string,
        public telefone?: string,
        public endereco?: string,
        public regiaoTrabalho?: string,
        public ativo: boolean = true
    ) {}
}