import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const id = localStorage.getItem("id");

export const Unverified = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // setTimeout(() => {
    if (!id) navigate("/login");
    // }, 1000);
  }, [navigate]);
};

export const Verified = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // setTimeout(() => {
    if (id) navigate("/home");
    // }, 1000);
  }, [navigate]);
};
