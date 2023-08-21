import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Components/services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const { data } = await api.get(`/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data);
          navigate("/dashboard");
        } catch (error) {
          console.log("Erro ao obter os dados do usuário:", error);
        }
      }
      setLoading(false);
    };

    autoLogin();
  }, []);

  const userRegister = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Erro ao realizar o registro:", error);
    }
  };

  const userLogin = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, userRegister, userLogin, userLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);