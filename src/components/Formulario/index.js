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

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          obrigatorio={true}
          placeholder="Digite seu nome"
        />
        <CampoTexto
          label="Cargo"
          obrigatorio={true}
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          label="Imagem"
          obrigatorio={false}
          placeholder="Informe o endereço da imagem"
        />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
