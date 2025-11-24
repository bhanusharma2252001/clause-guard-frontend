// src/routes/RootRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RootRedirect() {
  const { isAuthenticated } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (isAuthenticated) nav("/home", { replace: true });
    else nav("/login", { replace: true });
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return null;
}
