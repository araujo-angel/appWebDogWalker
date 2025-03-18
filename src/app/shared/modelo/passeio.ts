import { Cliente } from "./cliente";
import { Walker } from "./walker";

export class Passeio {
  constructor(
      public id?: string,
      public cliente?: Cliente,   
      public walker?: Walker,
      public telefone?: string,
      public nomePet?: string,
      public dataHora?: string,
      public local?: string
  ) {}
}
