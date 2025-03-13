export class Feedback {
        public id?: string;
        public clienteEmail?: string;
        public comentario?: string;
        public nota?: string;
        public data?: string;

    constructor(id?: string, feedback: Feedback = {}) {
        this.id = id;
        this.clienteEmail = feedback.clienteEmail;
        this.comentario = feedback.comentario;
        this.nota = feedback.nota;
        this.data = feedback.data;
   
    }
}