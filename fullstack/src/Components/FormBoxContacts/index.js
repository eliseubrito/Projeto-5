import StyledForm from "./style";

const FormBoxContacts = () => {
  return (
    <StyledForm>
      <h1>Adicionar Contato</h1>
      <label>Nome Completo: </label>
      <input type="text"></input>
      <label>Email: </label>
      <input type="text"></input>
      <label>Telefone: </label>
      <input type="text"></input>
      <button>Adicionar</button>
    </StyledForm>
  );
};

export default FormBoxContacts;
