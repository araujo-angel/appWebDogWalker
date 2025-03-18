package br.edu.ifpb.pweb.appWebDogWalker.repositorios;

import br.edu.ifpb.pweb.appWebDogWalker.modelos.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepositorio extends JpaRepository<Feedback, Long> {
}
