package br.edu.ifpb.pweb.appWebDogWalker.modelos;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity(name = "passeios")
public class Passeio {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime dataDePasseio;

    @OneToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @OneToOne
    @JoinColumn(name = "pet_id")
    private Pet pet;

    @OneToOne
    @JoinColumn(name = "walker_id")
    private Walker walker;

    public Passeio() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDataDePasseio() {
        return dataDePasseio;
    }

    public void setDataDePasseio(LocalDateTime dataDePasseio) {
        this.dataDePasseio = dataDePasseio;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public Walker getWalker() {
        return walker;
    }

    public void setWalker(Walker walker) {
        this.walker = walker;
    }

    @Override
    public String toString() {
        return "Passeio{" +
                "id=" + id +
                ", dataDePasseio=" + dataDePasseio +
                ", cliente=" + cliente +
                ", pet=" + pet +
                ", walker=" + walker +
                '}';
    }
}
