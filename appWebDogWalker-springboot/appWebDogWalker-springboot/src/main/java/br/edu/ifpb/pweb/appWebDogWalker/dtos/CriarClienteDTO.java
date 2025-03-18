package br.edu.ifpb.pweb.appWebDogWalker.dtos;

import java.util.List;

public record CriarClienteDTO(
        String cpf,
        String nome,
        String email,
        String telefone,
        String endereco,
        List<String> pets
) {
}
