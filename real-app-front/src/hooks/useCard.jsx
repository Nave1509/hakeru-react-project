import { useState, useEffect } from "react";
import cardService from "../services/cardService";
import { useAuth } from "../context/auth.context";

export const useCards = (id) => {
  const [card, setCard] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const getCard = async () => {
      const { data } = await cardService.getCard(id);
      setCard(data);
    };
    if (user?.biz) {
      getCard();
    }
  }, [id]);

  return card;
};
