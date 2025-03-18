package br.edu.ifpb.pweb.appWebDogWalker.servicos;

import br.edu.ifpb.pweb.appWebDogWalker.modelos.Pet;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.PetRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetServico {
    @Autowired
    private PetRepositorio petRepositorio;

    public Pet criarOuAtualizarPet(Pet pet) {
        return this.petRepositorio.save(pet);
    }

    public List<Pet> buscarTodos() {
        return this.petRepositorio.findAll();
    }

    public Optional<Pet> buscarPetPorId(Long id) {
        return this.petRepositorio.findById(id);
    }

    public Optional<Pet> buscarPetPorNome(String nome) {
        return this.petRepositorio.findByNome(nome);
    }

    public void removerPet(Pet pet) {
        this.petRepositorio.delete(pet);
    }
}
