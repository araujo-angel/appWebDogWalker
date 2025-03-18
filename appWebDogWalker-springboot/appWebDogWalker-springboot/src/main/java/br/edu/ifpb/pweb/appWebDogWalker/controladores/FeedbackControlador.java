package br.edu.ifpb.pweb.appWebDogWalker.controladores;

import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarFeedbackDTO;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Feedback;
import br.edu.ifpb.pweb.appWebDogWalker.servicos.FeedbackServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackControlador {
    @Autowired
    private FeedbackServico feedbackServico;

    @GetMapping
    public ResponseEntity<List<Feedback>> buscarTodos() {
        return ResponseEntity.ok(feedbackServico.buscarTodos());
    }

    @PostMapping
    public ResponseEntity<Feedback> criarFeedback(@RequestBody CriarFeedbackDTO dto) {
        try {
            return ResponseEntity.status(201).body(feedbackServico.criarFeedback(dto));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
