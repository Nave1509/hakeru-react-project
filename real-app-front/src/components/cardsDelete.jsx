import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import cardService from "../services/cardService";

const CardsDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      await cardService.deleteCard(id);
      navigate("/my-cards");
    };

    deleteCard();
  }, [id, navigate]);

  return null;
};
export default CardsDelete;
