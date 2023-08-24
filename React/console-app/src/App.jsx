import "./App.css";
import { ConfigProvider, theme } from "antd";
import trTR from "antd/locale/tr_TR";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/User";
import Role from "./pages/Role/Role";
import Flow from "./pages/Flow/Flow";
import Task from "./pages/Task/Task";
import Permission from "./pages/Permission/Permission";
import MainLayout from "./components/MainLayout";

function App() {
  // task => permission
  // flow => role

  return (
    <ConfigProvider locale={trTR} theme={{ algorithm: theme.defaultAlgorithm }}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" exact element={<User />} />
            <Route path="/user" element={<User />} />
            <Route path="/role" element={<Role />} />
            <Route path="/flow" element={<Flow />} />
            <Route path="/task" element={<Task />} />
            <Route path="/permission" element={<Permission />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
