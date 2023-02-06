import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import StyledDiv from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome Completo é um campo obrigatório!"),
    email: yup.string().email().required("Email é um campo obrigatório!"),
    password: yup
      .string()
      .min(8, "A senha contem mais de 8 digitos")
      .max(32)
      .required("Senha é um campo obrigatório!"),
    telephone: yup
      .string()
      .min(11, "Minimo de 11 digitos")
      .max(32, "Maximo")
      .required("Telefone é um campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <Container>
      <StyledDiv>
        <form
          className="FormBoxRegister"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <h1 className="Title">Criar Conta</h1>
          <label>Nome Completo: </label>
          <input {...register("name")} placeholder="Nome" type="name"></input>
          <p>{errors.name?.message}</p>
          <label>Email: </label>
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
          ></input>
          <p>{errors.email?.message}</p>
          <label>Senha: </label>
          <input
            {...register("password")}
            placeholder="Senha"
            type="password"
          ></input>
          <p>{errors.password?.message}</p>
          <label>Telefone: </label>
          <input
            {...register("telephone")}
            placeholder="Telefone"
            type="telephone"
          ></input>
          <p>{errors.telephone?.message}</p>
          <button>Registrar</button>
          <Link to="/login">Voltar</Link>
        </form>
      </StyledDiv>
    </Container>
  );
};

export default Register;
