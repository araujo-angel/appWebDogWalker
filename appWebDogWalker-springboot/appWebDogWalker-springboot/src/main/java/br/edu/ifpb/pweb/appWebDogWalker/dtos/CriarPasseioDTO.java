package br.edu.ifpb.pweb.appWebDogWalker.dtos;

import java.time.LocalDateTime;

public record CriarPasseioDTO(
        String nomeCliente,
        String telefone,
        String nomePet,
        LocalDateTime dataHoraDePasseio,
        Long idDogWalker
) {
}
