import styleDash from "../Styles/dashboard.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const DashBoard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Erro ao obter os dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className={styleDash.screen}>
        <div className={styleDash.screenBorder}>
          <div className={styleDash.screenContainner}>
            <div className={styleDash.header}>
              <h2 className={styleDash.titleHeader}>Kenzie Hub</h2>
              <Link to="/">
                <button
                  className={styleDash.buttonHeader}
                  onClick={() => localStorage.removeItem("token")}
                >
                  Sair
                </button>
              </Link>
            </div>
          </div>
          <hr className={styleDash.border} />
          <div className={styleDash.screenContainner}>
            <div className={styleDash.subHeader}>
              <h3>Olá, {userData?.name} </h3>
              <p className={styleDash.textSub}> {userData?.course_module} </p>
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
