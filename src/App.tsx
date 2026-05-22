import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
        fontWeight: "bold",
      }}
    >
      FabricAI Pro
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />
      </Routes>
    </BrowserRouter>
  );
}