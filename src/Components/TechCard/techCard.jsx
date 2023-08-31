import { useContext } from "react";
import styleList from "../../Styles/styleList.module.scss";
import ImgEdit from "../../assets/ButtonEdit.png";
import ImgRemove from "../../assets/ButtonRemove.png";
import { TechContext } from "../providers/TechnologieContext";

export const TechCard = ({ title, status, id, techAll }) => {
  const { cardDelete, setEditingCard } = useContext(TechContext);

  return (
    <li className={styleList.itensList}>
      <h3 className={styleList.title}>{title}</h3>
      <div className={styleList.buttonItensList}>
        <p className={styleList.textList}>{status}</p>
        <button
          className={styleList.buttonEdit}
          onClick={() => setEditingCard(techAll)}
        >
          <img src={ImgEdit} alt="ButtonEdit" />
        </button>
        <button
          className={styleList.buttonRemove}
          onClick={() => cardDelete(id)}
        >
          <img src={ImgRemove} alt="ButtonRemove" />
        </button>
      </div>
    </li>
  );
};
