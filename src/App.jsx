import React, { useEffect, useState, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const Theme = createContext();
export const Language = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("eng");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("light", theme === "light");
    body.classList.toggle("dark", theme === "dark");
  }, [theme]);
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");

    useEffect(() => {
      if (!token) {
        navigate("/login", { replace: true });
      }
    }, [token, navigate]);

    if (!token) {
      return null;  
    }

    return children;
  }

  return (
    <div>
      <Theme.Provider value={{ theme, setTheme }}>
        <Language.Provider value={{ language, setLanguage }}>
          <Routes>
            <Route
              index
              element={
                <PrivateRoute>
                  <MainLayout>
                    <Home />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <About />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Language.Provider>
      </Theme.Provider>
    </div>
  );
}

export default App;