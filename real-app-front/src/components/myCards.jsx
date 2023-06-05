import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";

const MyCards = () => {
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
        <div className="col-12 col-sm-10 text-center">
          <p>no card...</p>
          some card
        </div>
      </div>
    </>
  );
};
export default MyCards;
