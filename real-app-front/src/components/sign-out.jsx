import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const SignOut = ({ redirect = "/" }) => {
  const Navigate = useNavigate();

  const { logout } = useAuth();

  useEffect(() => {
    logout();
    Navigate(redirect);
  }, [Navigate, logout]);

  return null;
};
export default SignOut;
