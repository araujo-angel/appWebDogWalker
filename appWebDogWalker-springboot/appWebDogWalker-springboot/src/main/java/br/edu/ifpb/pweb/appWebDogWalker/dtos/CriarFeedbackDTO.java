package br.edu.ifpb.pweb.appWebDogWalker.dtos;

import java.time.LocalDate;

public record CriarFeedbackDTO(
        String comentario,
        Integer nota,
        LocalDate data,
        Long clienteId
) {}
