package br.edu.ifpb.pweb.appWebDogWalker.servicos;

import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarWalkerDTO;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Walker;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.WalkerRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WalkerServico {
    @Autowired
    private WalkerRepositorio walkerRepositorio;

    public CriarWalkerDTO criarOuAtualizarWalker(CriarWalkerDTO walkerDTO) throws Exception {
        Walker walker = new Walker();
        walker.setEmail(walkerDTO.email());
        walker.setEndereco(walkerDTO.endereco());
        walker.setNome(walkerDTO.nome());
        walker.setTelefone(walkerDTO.telefone());
        walker.setRegiaoDeTrabalho(walkerDTO.regiaoDeTrabalho());

        walkerRepositorio.save(walker);
        return walkerDTO;
    }

    public List<Walker> buscarTodos() {
        return walkerRepositorio.findAll();
    }

    public Optional<Walker> buscarWalkerPorId(Long id) {
        return walkerRepositorio.findById(id);
    }

    public Optional<Walker> buscarWalkerPorEmail(String email) {
        return walkerRepositorio.findWalkerByEmail(email);
    }

    public void removerWalker(Walker walker) {
        walkerRepositorio.delete(walker);
    }
}
