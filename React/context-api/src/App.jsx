import "./App.css";
import User from "./pages/User";
import { UserProvider } from "./context/UserContext/UserContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ToDo from "./pages/ToDo";
import { ToDoProvider } from "./context/ToDoContext/ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="nav">
            <ul>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/todo">ToDo</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/user" element={<User />} />
            <Route path="/todo" element={<ToDo />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ToDoProvider>
  );
}

export default App;
