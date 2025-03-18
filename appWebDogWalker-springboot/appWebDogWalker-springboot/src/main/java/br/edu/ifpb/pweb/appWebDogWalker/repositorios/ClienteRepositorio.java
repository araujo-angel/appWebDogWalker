package br.edu.ifpb.pweb.appWebDogWalker.repositorios;

import br.edu.ifpb.pweb.appWebDogWalker.modelos.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {
    Optional<Cliente> findClienteByEmail(String email);

    Optional<Cliente> findClienteByNome(String nome);
}
