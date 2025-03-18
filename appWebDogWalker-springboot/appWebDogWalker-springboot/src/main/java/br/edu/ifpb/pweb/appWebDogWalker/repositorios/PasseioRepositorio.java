package br.edu.ifpb.pweb.appWebDogWalker.repositorios;

import br.edu.ifpb.pweb.appWebDogWalker.modelos.Passeio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasseioRepositorio extends JpaRepository<Passeio, Long> {
}
