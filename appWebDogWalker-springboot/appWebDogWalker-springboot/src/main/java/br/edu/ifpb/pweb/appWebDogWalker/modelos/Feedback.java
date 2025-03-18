package br.edu.ifpb.pweb.appWebDogWalker.modelos;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity(name = "feedbacks")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false)
    private String comentario;

    @Column(nullable = false)
    private Integer nota;

    @Column(nullable = false)
    private LocalDate data;

    @OneToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    public Feedback() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Integer getNota() {
        return nota;
    }

    public void setNota(Integer nota) {
        this.nota = nota;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "id=" + id +
                ", comentario='" + comentario + '\'' +
                ", nota=" + nota +
                ", data=" + data +
                ", cliente=" + cliente +
                '}';
    }
}
