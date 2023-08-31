import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [techList, setTechList] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const { data } = await api.get(`/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data);
          setTechList(data.techs);
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
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setTechList(data.user.techs);
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

  const addNewTech = async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post("/users/techs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTechList([...techList, data]);
    } catch (error) {
      alert("Tecnologia ja criada");
    }
  };

  const cardUpdate = async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.put(
        `/users/techs/${editingCard.id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const newCardList = techList.map((card) => {
        if (card.id === editingCard.id) {
          return data;
        } else {
          return card;
        }
      });

      setTechList(newCardList);
      setEditingCard(null);
    } catch (error) {
      console.log("Erro ao atualizar os dados do usuário", error);
    }
  };

  const cardDelete = async (delId) => {
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/users/techs/${delId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newCardList = techList.filter((post) => post.id !== delId);
      setTechList(newCardList);
    } catch (error) {
      console.log("Erro ao excluir o card:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userRegister,
        userLogin,
        userLogout,
        loading,
        setIsOpen,
        isOpen,
        techList,
        cardDelete,
        addNewTech,
        editingCard,
        setEditingCard,
        cardUpdate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
