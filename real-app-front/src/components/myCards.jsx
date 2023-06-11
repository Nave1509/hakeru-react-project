import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />
      <div className="row flex-column align-content-center align-items-center ">
        <div className="col-12 col-sm-6 text-center">
          <Link to="/create-card">create a new card</Link>
        </div>
        <div
          className="col-12 col-sm-10 text-center"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {!cards.length ? (
            <p>no card...</p>
          ) : (
            cards.map((card) => <Card key={card._id} card={card} />)
          )}
        </div>
      </div>
    </>
  );
};
export default MyCards;
