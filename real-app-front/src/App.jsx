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

function App() {
  return (
    <div id="main" className="app d-flex flex-column min-vh-100">
      <div id="mainOverlay" className="app d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <NavBar />
        </header>
        <div className="flex-fill container ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn redirect="/" />} />
            <Route path="sign-out" element={<SignOut redirect="/" />} />

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
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
