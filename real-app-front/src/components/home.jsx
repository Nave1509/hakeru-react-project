import { useAuth } from "../context/auth.context";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";
import PageHeader from "./common/pageHeader";

const Home = () => {
  const { user } = useAuth();
  const cards = useMyCards();
  return (
    <>
      <PageHeader
        title={
          <>
            Build Your <i className="bi bi-boxes mx-2"></i> Biz
            <span>&copy;</span>
          </>
        }
        description='"Build your business" to sell online, offline, and everywhere in
        between.'
      />
      <div
        className="col-12 col-sm-12 text-center"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {!user || !user.biz ? (
          <p className="text-center text-danger fw-bold">
            Sign Up as a Business to create, edit and view cards
          </p>
        ) : !cards?.length ? (
          <p>No Card Yet.</p>
        ) : (
          cards.toReversed().map((card, index) => {
            if (index <= 3) {
              return <Card key={card._id} card={card} />;
            }
            return null;
          })
        )}
      </div>
    </>
  );
};
export default Home;
