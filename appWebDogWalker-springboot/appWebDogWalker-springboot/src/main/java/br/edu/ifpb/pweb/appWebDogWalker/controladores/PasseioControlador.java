package br.edu.ifpb.pweb.appWebDogWalker.controladores;

import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarPasseioDTO;
import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarWalkerDTO;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Passeio;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.PasseioRepositorio;
import br.edu.ifpb.pweb.appWebDogWalker.servicos.PasseioServico;
import br.edu.ifpb.pweb.appWebDogWalker.servicos.WalkerServico;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/passeios")
public class PasseioControlador {
    @Autowired
    private PasseioServico passeioServico;

    @Autowired
    private PasseioRepositorio passeioRepositorio;

    @PostMapping
    public ResponseEntity<CriarPasseioDTO> criarPasseio(@RequestBody CriarPasseioDTO passeioDTO) {
        try {
            return ResponseEntity.ok(passeioServico.criarPasseio(passeioDTO));
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Passeio>> listarPasseios() {
        return ResponseEntity.ok(passeioServico.buscarTodos());
    }

    @DeleteMapping("/{id}")
    public void removerPasseio(@PathVariable("id") Long passeioId) {
        try {
            passeioServico.removerPasseio(passeioId);
        } catch (Exception e) {
            ResponseEntity.badRequest().build();
        }
    }
}
