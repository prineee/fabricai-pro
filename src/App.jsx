import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import AIChat from "./pages/AIChat";
import Analytics from "./pages/Analytics";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <nav className="flex gap-6 p-6 bg-zinc-900">
          <Link to="/">Home</Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/billing">
            Billing
          </Link>

          <Link to="/ai">AI</Link>

          <Link to="/analytics">
            Analytics
          </Link>

          <Link to="/login">Login</Link>

          <Link to="/register">
            Register
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/billing"
            element={<Billing />}
          />

          <Route
            path="/ai"
            element={<AIChat />}
          />
          <Route path="/admin" element={<Admin />} />

          <Route
            path="/analytics"
            element={<Analytics />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;