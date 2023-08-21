import styleDash from "../Components/Styles/dashBoard.module.scss";
import { useUserContext } from "../providers/ProductContext";

export const DashBoard = () => {
  const { user, userLogout } = useUserContext();

  return (
    <>
      <div className={styleDash.screen}>
        <div className={styleDash.screenBorder}>
          <div className={styleDash.screenContainner}>
            <div className={styleDash.header}>
              <h2 className={styleDash.titleHeader}>Kenzie Hub</h2>
              <button className={styleDash.buttonHeader} onClick={userLogout}>
                Sair
              </button>
            </div>
          </div>
          <hr className={styleDash.border} />
          <div className={styleDash.screenContainner}>
            <div className={styleDash.subHeader}>
              <h3>Olá, {user?.name} </h3>
              <p className={styleDash.textSub}> {user?.course_module} </p>
            </div>
          </div>
          <hr className={styleDash.border} />
          <div className={styleDash.screenContainner}>
            <div>
              <h3>Que pena! Estamos em desenvolvimento :( </h3>
              <p className={styleDash.textInfo}>
                Nossa aplicação está em desenvolvimento, em breve
                teremosnovidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
