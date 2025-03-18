package br.edu.ifpb.pweb.appWebDogWalker.modelos;

import jakarta.persistence.*;

@Entity(name = "walkers")
public class Walker {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String telefone;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = false)
    private String regiaoDeTrabalho;

    public Walker() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getRegiaoDeTrabalho() {
        return regiaoDeTrabalho;
    }

    public void setRegiaoDeTrabalho(String regiaoDeTrabalho) {
        this.regiaoDeTrabalho = regiaoDeTrabalho;
    }

    @Override
    public String toString() {
        return "Walker{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", telefone='" + telefone + '\'' +
                ", endereco='" + endereco + '\'' +
                ", regiaoDeTrabalho='" + regiaoDeTrabalho + '\'' +
                '}';
    }
}
