package br.edu.ifpb.pweb.appWebDogWalker.repositorios;

import br.edu.ifpb.pweb.appWebDogWalker.modelos.Walker;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WalkerRepositorio extends JpaRepository<Walker, Long> {
    Optional<Walker> findWalkerByEmail(String email);
}
