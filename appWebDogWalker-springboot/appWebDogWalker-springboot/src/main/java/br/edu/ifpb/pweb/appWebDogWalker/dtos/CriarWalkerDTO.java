package br.edu.ifpb.pweb.appWebDogWalker.dtos;

public record CriarWalkerDTO(
        String nome,
        String email,
        String telefone,
        String endereco,
        String regiaoDeTrabalho
) {
}
