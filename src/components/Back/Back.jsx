import arrowIcon from "/images/icons/arrow.svg";
import { useNavigate } from "react-router-dom";
import "./Back.scss";

export const Back = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="back">
      <button className="back__button" onClick={handleBackClick}>
        <img src={arrowIcon} alt="Back" className="back__icon" />
        Back
      </button>
    </div>
  );
};
