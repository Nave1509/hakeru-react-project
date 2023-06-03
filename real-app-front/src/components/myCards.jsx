import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";

const MyCards = () => {
  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />
      <div className="row">
        <Link to="/create-card">create a new card</Link>
      </div>
      <div className="row">
        <p>no card...</p>
        some card
      </div>
    </>
  );
};
export default MyCards;
