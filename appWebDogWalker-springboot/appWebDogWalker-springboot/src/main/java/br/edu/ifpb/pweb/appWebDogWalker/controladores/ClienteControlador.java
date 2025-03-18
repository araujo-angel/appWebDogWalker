package br.edu.ifpb.pweb.appWebDogWalker.controladores;

import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarClienteDTO;
import br.edu.ifpb.pweb.appWebDogWalker.servicos.ClienteServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clientes")
public class ClienteControlador {
    @Autowired
    private ClienteServico clienteServico;

    @PostMapping
    public ResponseEntity<CriarClienteDTO> criarCliente(@RequestBody CriarClienteDTO clienteDTO) {
        try {
            return ResponseEntity.ok(clienteServico.criarOuAtualizarCliente(clienteDTO));
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.badRequest().build();
        }
    }
}
