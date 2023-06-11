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
          </>
        }
        description='"Build your business" to sell online, offline, and everywhere in
        between.'
      />
      {!user || !user.biz ? (
        <p className="text-center text-danger fw-bold">
          Sign Up as a Business to create, edit and view cards
        </p>
      ) : !cards?.length ? (
        <p>No Card Yet.</p>
      ) : (
        cards.toReversed().map((card, index) => {
          if (index <= 2) {
            return <Card key={card._id} card={card} />;
          }
          return null;
        })
      )}
    </>
  );
};
export default Home;
