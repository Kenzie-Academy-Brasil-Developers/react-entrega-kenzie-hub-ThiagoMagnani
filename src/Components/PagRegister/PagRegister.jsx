import styleReg from "../../Styles/pagReg.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaReg } from "../formSchema/formReg";
import { useUserContext } from "../providers/ProductContext";

export const PagRegister = () => {
  const { userRegister } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaReg),
  });

  return (
    <>
      <div className={styleReg.pagReg}>
        <form onSubmit={handleSubmit(userRegister)}>
          <div className={styleReg.headerReg}>
            <h1 className={styleReg.titleHeader}>Kenzie Hub</h1>
            <Link to="/">
              <button className={styleReg.buttonHeader}>Voltar</button>
            </Link>
          </div>
          <div className={styleReg.pagRegAll}>
            <h2 className={styleReg.title}>Crie sua conta</h2>
            <div>
              <p className={styleReg.subTitle}>Rapido e grátis, vamos nessa</p>
            </div>

            <div className={styleReg.RegMain}>
              <p className={styleReg.textTitle}>Nome</p>
              <input
                type="text"
                className={styleReg.input}
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              {errors.name ? (
                <p className={styleReg.textError}>{errors.name.message}</p>
              ) : null}

              <p className={styleReg.textTitle}>Email</p>
              <input
                type="email"
                className={styleReg.input}
                placeholder="Digite aqui seu Email"
                {...register("email")}
              />
              {errors.email ? (
                <p className={styleReg.textError}>{errors.email.message}</p>
              ) : null}

              <p className={styleReg.textTitle}>Senha</p>
              <input
                type="password"
                className={styleReg.input}
                placeholder="Digite aqui seu Senha"
                {...register("password")}
              />
              {errors.password ? (
                <p className={styleReg.textError}>{errors.password.message}</p>
              ) : null}

              <p className={styleReg.textTitle}>Confirmar Senha</p>
              <input
                type="password"
                className={styleReg.input}
                placeholder="Digite novamente seu Senha"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword ? (
                <p className={styleReg.textError}>
                  {errors.confirmPassword.message}
                </p>
              ) : null}

              <p className={styleReg.textTitle}>Bio</p>
              <input
                type="text"
                className={styleReg.input}
                placeholder="Fale sobre você"
                {...register("bio")}
              />
              {errors.bio ? (
                <p className={styleReg.textError}>{errors.bio.message}</p>
              ) : null}

              <p className={styleReg.textTitle}>Contato</p>
              <input
                type="text"
                className={styleReg.input}
                placeholder="Opções de contato"
                {...register("contact")}
              />
              {errors.contact ? (
                <p className={styleReg.textError}>{errors.contact.message}</p>
              ) : null}

              <p className={styleReg.textTitle}>Selecionar módulo</p>
              <select
                className={styleReg.choiceModule}
                {...register("course_module")}
              >
                <option value="" disabled>
                  Selecionar
                </option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo (Introdução ao Frontend)
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo (Frontend Avançado)
                </option>
                <option value=" Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo (Introdução ao Backend)
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo (Backend Avançado)
                </option>
              </select>
              {errors.course_module ? (
                <p className={styleReg.textError}>
                  {errors.course_module.message}
                </p>
              ) : null}

              <button className={styleReg.buttonReg} type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
