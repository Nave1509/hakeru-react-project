import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navBar";
import SignIn from "./components/sign-in";
import SignOut from "./components/sign-out";
import SignUp from "./components/signUp";
import "./services/userServices";
import SignUpBiz from "./components/signUpBiz";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";
import httpService from "./services/httpService";
import CardsCreate from "./components/cardCreate";
import { getAll } from "./services/cardService";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100   ">
      <ToastContainer />
      <header>
        <NavBar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp redirect="/sign-in" />} />
          <Route
            path="sign-up-biz"
            element={<SignUpBiz redirect="/my-cards" />}
          />
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
