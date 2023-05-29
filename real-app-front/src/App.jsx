import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navBar";
import SignIn from "./components/sign-in";
import SignOut from "./components/sign-out";
import SignUp from "./components/signUp";
import "./services/userServices";
import SignUpBiz from "./components/signUpBiz";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 ">
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
