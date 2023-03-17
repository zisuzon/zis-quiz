import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route
                exact
                path="/signup"
                element={
                  <PublicRoute>
                    <Signup />
                  </PublicRoute>
                }
              ></Route>
              <Route
                exact
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              ></Route>
              <Route
                exact
                path="/quiz"
                element={
                  <PrivateRoute>
                    <Quiz />
                  </PrivateRoute>
                }
              ></Route>

              <Route
                exact
                path="/result"
                element={
                  <PrivateRoute>
                    <Result />
                  </PrivateRoute>
                }
              ></Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
