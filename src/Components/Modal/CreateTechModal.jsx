import styleModal from "../../Styles/styleModal.module.scss";
import { useContext } from "react";
import { TechContext } from "../providers/TechnologieContext";
import { useForm } from "react-hook-form";

export const CreateTechModal = () => {
  const { isOpen, setIsOpen, addNewTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    await addNewTech(formData);
    closeModal();
  };

  return (
    <>
      {isOpen && (
        <div className={styleModal.modal}>
          <div className={styleModal.modalBox}>
            <div className={styleModal.headerModal}>
              <h3 className={styleModal.titleHeader}>Cadastrar Technologia</h3>
              <button className={styleModal.closeButton} onClick={closeModal}>
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
                    placeholder="Nome"
                    name="title"
                    {...register("title")}
                  />
                </div>
                <div>
                  <p className={styleModal.titleInputModal}>
                    Selecionar status
                  </p>
                  <select
                    className={styleModal.inputOption}
                    name="status"
                    {...register("status")}
                  >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediario">Intermediário</option>
                    <option value="Avancado">Avançado</option>
                  </select>
                </div>
                <button className={styleModal.buttonAdd} type="submit">
                  Cadastrar Tecnologia
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
