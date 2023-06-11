import { useState, useEffect } from "react";
import cardService from "../services/cardService";
import { useAuth } from "../context/auth.context";

export const useMyCards = () => {
  const [cards, setCards] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getCards = async () => {
      try {
        const { data } = await cardService.getAll();
        setCards(data);
      } catch ({ response }) {
        return cards;
      }
    };
    if (user?.biz) {
      getCards();
    }
  }, []);

  return cards;
};
