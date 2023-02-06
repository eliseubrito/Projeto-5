import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import StyledDiv from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Home = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email é um campo obrigatório!"),
    password: yup
      .string()
      .min(8, "A senha contem mais de 8 digitos")
      .max(32)
      .required("Senha é um campo obrigatório!"),
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
        <form className="FormBoxLogin" onSubmit={handleSubmit(onSubmitHandler)}>
          <h1 className="Title">Login</h1>
          <label>Email:</label>
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
          <button>Entrar</button>
          <Link to="/register">Registrar Conta</Link>
        </form>
      </StyledDiv>
    </Container>
  );
};

export default Home;
