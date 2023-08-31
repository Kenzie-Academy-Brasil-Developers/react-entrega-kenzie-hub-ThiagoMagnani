import { useContext } from "react";
import styleList from "../../Styles/styleList.module.scss";
import img from "../../assets/ButtonAdd.png";
import { TechContext } from "../providers/TechnologieContext";
import { CreateTechModal } from "../Modal/CreateTechModal";
import { TechCard } from "../TechCard/techCard";
import { EditTechModal } from "../Modal/EditTechModal";
import { UserContext } from "../providers/ProductContext";

export const TechList = () => {
  const { techList } = useContext(UserContext);
  const { addNewTech, setIsOpen, editingCard } = useContext(TechContext);

  return (
    <>
      <div className={styleList.headerList}>
        <h3>Tecnologias</h3>
        <button className={styleList.buttonAdd} onClick={() => setIsOpen(true)}>
          <img src={img} alt="ButtonAdd" />
        </button>
      </div>
      <div className={styleList.boxList}>
        {techList.length === 0 ? (
          <p className={styleList.textEmpty}>Nenhuma tecnologia disponível.</p>
        ) : (
          <ul className={styleList.list}>
            {techList.map((tech) => (
              <TechCard
                key={tech.title}
                title={tech.title}
                status={tech.status}
                id={tech.id}
                techAll={tech}
              />
            ))}
          </ul>
        )}
      </div>
      <CreateTechModal addNewTech={addNewTech} />
      {editingCard ? <EditTechModal addNewTech={addNewTech} /> : null}
    </>
  );
};
