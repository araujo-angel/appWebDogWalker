package br.edu.ifpb.pweb.appWebDogWalker.servicos;

import br.edu.ifpb.pweb.appWebDogWalker.dtos.CriarClienteDTO;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Cliente;
import br.edu.ifpb.pweb.appWebDogWalker.modelos.Pet;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.ClienteRepositorio;
import br.edu.ifpb.pweb.appWebDogWalker.repositorios.PetRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClienteServico {
    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private PetRepositorio petRepositorio;

    public CriarClienteDTO criarOuAtualizarCliente(CriarClienteDTO clienteDTO) throws Exception {
        Optional<Cliente> optionalCliente = this.buscarClientePorEmail(clienteDTO.email());

        if (optionalCliente.isPresent()) {
            throw new Exception("Cliente já existe");
        }

        Cliente cliente = new Cliente();
        cliente.setAtivo(true);
        cliente.setCpf(clienteDTO.cpf());
        cliente.setEmail(clienteDTO.email());
        cliente.setNome(clienteDTO.nome());
        cliente.setEndereco(clienteDTO.endereco());
        cliente.setTelefone(clienteDTO.telefone());

        Cliente saved = clienteRepositorio.save(cliente);

        List<Pet> pets = new ArrayList<>();

        for (String petNome : clienteDTO.pets()) {
            Pet pet = new Pet();
            pet.setNome(petNome);
            pet.setCliente(saved);
            pets.add(pet);
            petRepositorio.save(pet);
        }

        saved.setPets(pets);
        return clienteDTO;
    }

    public List<Cliente> buscarTodos() {
        return clienteRepositorio.findAll();
    }

    public Optional<Cliente> buscarClientePorId(Long id) {
        return clienteRepositorio.findById(id);
    }

    public Optional<Cliente> buscarClientePorEmail(String email) {
        return clienteRepositorio.findClienteByEmail(email);
    }

    public void removerCliente(Cliente cliente) {
        clienteRepositorio.delete(cliente);
    }
}
