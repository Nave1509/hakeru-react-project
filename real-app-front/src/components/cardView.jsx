import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCard } from "../services/cardService";

const CardView = () => {
  const [card, setCard] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getCardInfo = async () => {
      const { data } = await getCard(id);

      setCard(data);
    };
    getCardInfo();
  }, [id]);

  return (
    <>
      {card && (
        <div id="cardView" className="mt-3">
          <div
            className="col-12 col-sm-6"
            style={{
              backgroundImage: `url(${card.bizImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "300px",
              margin: "0 auto",
            }}
          ></div>
          <div className="d-flex flex-column align-items-center w-100 w-sm-25 mx-auto">
            <h1 className="text-center my-2">{card.bizName}</h1>
            <p className="text-center mt-2">{card.bizDescription}</p>

            <div className="text-center my-2">
              <span className=" fw-bold me-2">Address:</span> {card.bizAddress}
            </div>
            <div className="text-center">
              <span className=" fw-bold me-2">Phone:</span>
              {card.bizPhone}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CardView;
