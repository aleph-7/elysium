import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      // Replace with your JWT verification logic (e.g., using a library)
      setIsAuthenticated(true); // Assuming valid token
    }
  }, []);

  return { isAuthenticated };
};

export default useAuth;
