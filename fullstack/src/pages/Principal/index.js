import Container from "../../Components/Container";
import StyledForm from "./style";

const Principal = () => {
  return (
    <Container>
      <StyledForm>
        <h1>Criar Conta</h1>
        <label>Nome Completo: </label>
        <input type="text"></input>
        <label>Email: </label>
        <input type="text"></input>
        <label>Senha: </label>
        <input type="text"></input>
        <label>Telefone: </label>
        <input type="text"></input>
        <button>Registrar</button>
      </StyledForm>
    </Container>
  );
};

export default Principal;
