package br.edu.ifpb.pweb.appWebDogWalker.servicos;

import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarPasseioDTO;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Cliente;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Passeio;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Pet;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Walker;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.ClienteRepositorio;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.PasseioRepositorio;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.PetRepositorio;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.WalkerRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PasseioServico {
    @Autowired
    private PasseioRepositorio passeioRepositorio;

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private WalkerRepositorio walkerRepositorio;

    @Autowired
    private PetRepositorio petRepositorio;

    public CriarPasseioDTO criarPasseio(CriarPasseioDTO passeioDTO) throws Exception {
        Optional<Cliente> cliente = clienteRepositorio.findClienteByNome(passeioDTO.nomeCliente());
        if (cliente.isEmpty()) {
            throw new Exception("Cliente não existe");
        }

        Optional<Pet> pet = petRepositorio.findByNome(passeioDTO.nomePet());
        if (pet.isEmpty()) {
            throw new Exception("Pet não existe");
        }

        Optional<Walker> walker = walkerRepositorio.findById(passeioDTO.idDogWalker());
        if (walker.isEmpty()) {
            throw new Exception("Walker não existe");
        }

        Passeio passeio = new Passeio();
        passeio.setDataDePasseio(passeioDTO.dataHoraDePasseio());
        passeio.setCliente(cliente.get());
        passeio.setPet(pet.get());
        passeio.setWalker(walker.get());

        this.passeioRepositorio.save(passeio);

        return passeioDTO;
    }

    public List<Passeio> buscarTodos() {
        return this.passeioRepositorio.findAll();
    }

    public Optional<Passeio> buscarPetPorId(Long id) {
        return this.passeioRepositorio.findById(id);
    }

    public void removerPasseio(Long passeioId) throws Exception {
        Optional<Passeio> passeio = passeioRepositorio.findById(passeioId);

        if (passeio.isEmpty()) {
            throw new Exception("Passeio não existe");
        }

        this.passeioRepositorio.delete(passeio.get());
    }
}
