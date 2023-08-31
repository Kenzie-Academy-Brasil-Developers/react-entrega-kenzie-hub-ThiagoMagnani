import styleModal from "../../Styles/styleModal.module.scss";
import { useContext } from "react";
import { TechContext } from "../providers/TechnologieContext";
import { useForm } from "react-hook-form";

export const EditTechModal = ({ title }) => {
  const { setEditingCard, editingCard, cardUpdate } = useContext(TechContext);
  const { register, handleSubmit } = useForm({
    values: {
      title: editingCard?.title || "",
      status: editingCard?.status || "",
    },
  });

  const handleFormSubmit = (formData) => {
    cardUpdate(formData);
  };

  return (
    <>
      <div className={styleModal.modal}>
        <div className={styleModal.modalBox}>
          <div className={styleModal.headerModal}>
            <h3 className={styleModal.titleHeader}>Technologia Detalhes</h3>
            <button
              className={styleModal.closeButton}
              onClick={() => setEditingCard(null)}
            >
              &times;
            </button>
          </div>
          <div className={styleModal.modalFormBox}>
            <form
              className={styleModal.formModal}
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <div>
                <p className={styleModal.titleInputModal}>Nome</p>
                <input
                  type="text"
                  className={styleModal.inputName}
                  placeholder={title}
                  name="title"
                  {...register("title")}
                />
              </div>
              <div>
                <p className={styleModal.titleInputModal}>Status</p>
                <select
                  className={styleModal.inputOption}
                  name="status"
                  {...register("status")}
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediario">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>
              <button className={styleModal.buttonAdd} type="submit">
                Salvar alterações
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
