package br.edu.ifpb.pweb.appWebDogWalker.servicos;

import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarFeedbackDTO;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Cliente;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Feedback;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.ClienteRepositorio;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.FeedbackRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackServico {
    @Autowired
    private FeedbackRepositorio feedbackRepositorio;

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    public Feedback criarFeedback(CriarFeedbackDTO feedbackDTO) throws Exception {
        if (feedbackDTO.nota() < 1 || feedbackDTO.nota() > 5) {
            throw new Exception("Nota inválida");
        }

        Optional<Cliente> cliente = clienteRepositorio.findById(feedbackDTO.clienteId());

        if (cliente.isEmpty()) {
            throw new Exception("Cliente não existe");
        }

        Feedback feedback = new Feedback();
        feedback.setCliente(cliente.get());
        feedback.setComentario(feedbackDTO.comentario());
        feedback.setData(feedbackDTO.data());
        feedback.setNota(feedbackDTO.nota());

        return this.feedbackRepositorio.save(feedback);
    }

    public List<Feedback> buscarTodos() {
        return feedbackRepositorio.findAll();
    }
}
