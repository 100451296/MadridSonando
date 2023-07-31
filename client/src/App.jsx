import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotAuthRoute from "./components/NotAuthRoute.jsx";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Función para obtener la altura del navbar y actualizar el estado
    const handleNavbarHeight = () => {
      const navbarElement = document.getElementById("navbar");
      if (navbarElement) {
        setNavbarHeight(navbarElement.clientHeight);
      }
    };

    // Ejecutar la función para obtener la altura del navbar
    handleNavbarHeight();

    // Agregar un listener para actualizar la altura cuando la ventana cambie de tamaño
    window.addEventListener("resize", handleNavbarHeight);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleNavbarHeight);
    };
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar id="navbar" style={{ position: "fixed", top: 0 }} />
          <div
            id="main-content"
            style={{
              position: "relative",
              minHeight: `calc(100vh - ${navbarHeight}px)`,
              padding: "0",
              margin: "0",
              overflow: "hidden",
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
              <Route element={<NotAuthRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
