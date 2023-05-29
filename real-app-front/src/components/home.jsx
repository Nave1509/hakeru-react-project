import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          Real <i className="bi bi-geo-fill"></i> App
        </>
      }
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur blanditiis aliquam esse omnis assumenda tempore, molestias suscipit deserunt et, itaque, officia nam neque quasi modi sint exercitationem sequi beatae unde!"
    />
  );
};
export default Home;
