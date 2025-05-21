import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Home", icon: <FaHome />, key: "home", path: "/" },
    { name: "Statistik", icon: <FaChartBar />, key: "statistik", path: "/statistik" },
    { name: "Document", icon: <FaFileAlt />, key: "document", path: "/document" },
    { name: "Setting", icon: <FaCog />, key: "setting", path: "/setting" },
    { name: "Logout", icon: <FaSignOutAlt />, key: "logout", path: "/logout" },
  ];

  const handleClick = (item) => {
    if (item.key === "logout") {
      // Tambahkan logika logout di sini kalau perlu
      console.log("Logout clicked");
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">Admin Area👍</div>
      <ul className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={item.key}
              onClick={() => handleClick(item)}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
