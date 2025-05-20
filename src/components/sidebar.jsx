import { useState } from "react";
import { FaHome, FaChartBar, FaFileAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const menu = [
    { name: "Home", icon: <FaHome />, key: "home" },
    { name: "Statistik", icon: <FaChartBar />, key: "statistik" },
    { name: "Document", icon: <FaFileAlt />, key: "document" },
    { name: "Setting", icon: <FaCog />, key: "setting" },
    { name: "Logout", icon: <FaSignOutAlt />, key: "logout" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">Dashboard</div>
      <ul className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <li
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition ${
              active === item.key ? "bg-gray-700" : ""
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
