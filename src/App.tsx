import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";

function ProtectedRoute({
  children,
}: any) {

  const token =
    localStorage.getItem("token");

  if (!token) {

    return (
      <Navigate to="/login" />
    );

  }

  return children;
}



function Layout({
  title,
  children,
}: any) {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (

    <div className="min-h-screen flex bg-slate-100">

      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-950 text-white p-6">

        <h1 className="text-4xl font-black mb-10">
          FabricAI Pro
        </h1>

        <div className="space-y-3">

          <Link to="/">
            <div className="bg-emerald-600 rounded-2xl px-5 py-4">
              Dashboard
            </div>
          </Link>

          <Link to="/subscription">
            <div className="hover:bg-slate-800 rounded-2xl px-5 py-4">
              Subscription
            </div>
          </Link>

          <Link to="/profile">
            <div className="hover:bg-slate-800 rounded-2xl px-5 py-4">
              Profile
            </div>
          </Link>

          <Link to="/settings">
            <div className="hover:bg-slate-800 rounded-2xl px-5 py-4">
              Settings
            </div>
          </Link>

        </div>

      </aside>



      {/* MAIN */}
      <main className="flex-1 p-8">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-6xl font-black">
              {title}
            </h1>

            <p className="text-slate-500 mt-2">
              AI-powered apparel ERP
            </p>

          </div>

          <button
            onClick={() => {

              localStorage.clear();

              window.location.href =
                "/login";

            }}

            className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold"
          >
            Logout
          </button>

        </div>

        {children}

      </main>

    </div>

  );
}



/* DASHBOARD */

function Dashboard() {

  return (

    <Layout title="Dashboard">

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500">
            Techpacks
          </p>

          <h2 className="text-5xl font-black mt-4">
            148
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500">
            AI Analyses
          </p>

          <h2 className="text-5xl font-black mt-4">
            932
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500">
            Production
          </p>

          <h2 className="text-5xl font-black mt-4">
            67
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500">
            Efficiency
          </p>

          <h2 className="text-5xl font-black mt-4">
            91%
          </h2>

        </div>

      </div>

    </Layout>

  );
}



/* PROFILE */

function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (

    <Layout title="Profile">

      <div className="bg-white rounded-3xl shadow-md p-10 space-y-5">

        <div className="bg-slate-100 p-5 rounded-2xl">
          Name: {user.name}
        </div>

        <div className="bg-slate-100 p-5 rounded-2xl">
          Email: {user.email}
        </div>

        <div className="bg-slate-100 p-5 rounded-2xl">
          Plan: {user.plan || "Demo"}
        </div>

      </div>

    </Layout>

  );
}



/* SETTINGS */

function Settings() {

  return (

    <Layout title="Settings">

      <div className="bg-white rounded-3xl shadow-md p-10">
        Account Settings Working
      </div>

    </Layout>

  );
}



/* SUBSCRIPTION */

function Subscription() {

  return (

    <Layout title="Subscription">

      <div className="grid grid-cols-3 gap-8">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-black">
            Demo
          </h2>

          <h1 className="text-5xl font-black mt-8">
            Free
          </h1>

          <button className="w-full bg-slate-900 text-white rounded-2xl py-4 mt-10 font-bold">
            Active Plan
          </button>

        </div>

        <div className="bg-emerald-600 text-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-black">
            Professional
          </h2>

          <h1 className="text-5xl font-black mt-8">
            ₹4,999
          </h1>

          <button className="w-full bg-white text-emerald-700 rounded-2xl py-4 mt-10 font-bold">
            Activate Plan
          </button>

        </div>

        <div className="bg-blue-600 text-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-black">
            Enterprise
          </h2>

          <h1 className="text-5xl font-black mt-8">
            ₹24,999
          </h1>

          <button className="w-full bg-white text-blue-700 rounded-2xl py-4 mt-10 font-bold">
            Activate Plan
          </button>

        </div>

      </div>

    </Layout>

  );
}



/* APP */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;