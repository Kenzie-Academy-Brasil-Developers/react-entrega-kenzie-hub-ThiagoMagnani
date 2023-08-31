import React, { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { UserContext } from "./ProductContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { techList, setTechList } = useContext(UserContext);
  const [editingCard, setEditingCard] = useState(null);

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
    <TechContext.Provider
      value={{
        setIsOpen,
        isOpen,
        cardDelete,
        addNewTech,
        editingCard,
        setEditingCard,
        cardUpdate,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => useContext(TechContext);
