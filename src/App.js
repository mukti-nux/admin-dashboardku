import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Home from "./pages/Home";
import StatistikPage from "./pages/StatistikPage";
import DocumentPage from "./pages/DocumentPage";
import SettingPage from "./pages/SettingPage";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-6 bg-gray-50 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/statistik" element={<StatistikPage />} />
              <Route path="/document" element={<DocumentPage />} />
              <Route path="/setting" element={<SettingPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
