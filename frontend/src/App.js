import { Navigation } from "./components/Navigation";
import { RequireAuth } from "./components/RequireAuth";
import { LoginPage } from "./pages/LoginPage";
import { NotesPage } from "./pages/NotesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route
            index
            path="/"
            element={
              <RequireAuth>
                <NotesPage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
