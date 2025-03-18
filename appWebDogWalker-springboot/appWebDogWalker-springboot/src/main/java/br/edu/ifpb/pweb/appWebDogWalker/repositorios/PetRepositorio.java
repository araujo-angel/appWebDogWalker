package br.edu.ifpb.pweb.appWebDogWalker.repositorios;

import br.edu.ifpb.pweb.appWebDogWalker.modelos.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PetRepositorio extends JpaRepository<Pet, Long> {
    Optional<Pet> findByNome(String nome);
}
