import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotAuthRoute from "./components/NotAuthRoute.jsx";
import { Moda } from "./pages/Moda.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Plans } from "./pages/Plans.jsx";
import { Appointments } from "./pages/Appointments.jsx";

function App() {
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
              padding: "0",
              margin: "0",
              overflow: "hidden",
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route
                path="/moda"
                element={
                  <CartProvider>
                    <Moda />
                  </CartProvider>
                }
              />
              <Route path="/plans/:service" element={<Plans/>}/>
             
              
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/appointments/:service" element={<Appointments></Appointments>}></Route>
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
