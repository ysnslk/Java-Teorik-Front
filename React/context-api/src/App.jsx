import "./App.css";
import User from "./pages/User";
import { UserProvider } from "./context/UserContext/UserContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/todo">ToDo</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user" element={<User />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
