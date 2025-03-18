package br.edu.ifpb.pweb.appWebDogWalker.controladores;

import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarWalkerDTO;
import br.edu.ifpb.pweb.appWebDogWalker.servicos.WalkerServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/walkers")
public class WalkerControlador {
    @Autowired
    private WalkerServico walkerServico;

    @PostMapping
    public ResponseEntity<CriarWalkerDTO> criarWalker(@RequestBody CriarWalkerDTO walkerDTO) {
        try {
            return ResponseEntity.ok(walkerServico.criarOuAtualizarWalker(walkerDTO));
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.badRequest().build();
        }
    }
}
