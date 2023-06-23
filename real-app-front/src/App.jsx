import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./components/about";
import CardsCreate from "./components/cardCreate";
import ProtectedRoute from "./components/common/protectedRoute";
import Footer from "./components/footer";
import Home from "./components/home";
import MyCards from "./components/myCards";
import NavBar from "./components/navBar";
import SignIn from "./components/sign-in";
import SignOut from "./components/sign-out";
import SignUp from "./components/signUp";
import "./services/userServices";
import CardsDelete from "./components/cardsDelete";
import CardsEdit from "./components/cardsEdit";
import CardView from "./components/cardView";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <NavBar />
      </header>
      <div id="main" className="flex-fill d-flex flex-column">
        <div
          id="mainOverlay"
          className="d-flex flex-fill flex-column d-flex px-5 pb-3"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn redirect="/" />} />
            <Route path="sign-out" element={<SignOut redirect="/" />} />

            <Route
              path="my-cards/view/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardView />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards"
              element={
                <ProtectedRoute onlyBiz>
                  <MyCards />
                </ProtectedRoute>
              }
            />
            <Route
              path="create-card"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsCreate />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/delete/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsDelete />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/edit/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsEdit />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
