import style from "../../Styles/style.module.scss";
import styleLogin from "../../Styles/pagLogin.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaLogin } from "../formSchema/formLogin";
import { useUserContext } from "../providers/ProductContext";

export const PagLogin = () => {
  const { userLogin } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaLogin),
  });

  return (
    <>
      <form onSubmit={handleSubmit(userLogin)}>
        <div className={styleLogin.pagLogin}>
          <h1 className={styleLogin.headerLogin}>Kenzie Hub</h1>
          <div className={styleLogin.pagLoginAll}>
            <h2 className={styleLogin.title}>Login</h2>
            <div className={styleLogin.pagLogMain}>
              <div className={styleLogin.account}>
                <div>
                  <p className={styleLogin.textTitle}>Email</p>
                  <input
                    type="email"
                    placeholder="Digite aqui seu email"
                    className={styleLogin.input}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className={styleLogin.textError}>
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <p className={styleLogin.textTitle}>Senha</p>
                  <input
                    type="password"
                    placeholder="Digite aqui sua senha"
                    className={styleLogin.input}
                    {...register("password")}
                  />
                  {errors.password ? (
                    <p className={styleLogin.textError}>
                      {errors.password.message}
                    </p>
                  ) : null}
                </div>
                <button className={styleLogin.buttonEntry}>Entrar</button>
              </div>
              <div>
                <p className={styleLogin.textReg}>Ainda não possui conta?</p>
                <Link to="/register">
                  <button className={styleLogin.buttonReg}>Cadastre-se</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
