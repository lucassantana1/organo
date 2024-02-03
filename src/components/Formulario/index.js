import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data-Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido => ", nome, cargo, imagem, time);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          obrigatorio={true}
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          obrigatorio={true}
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          obrigatorio={false}
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
