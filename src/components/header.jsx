import { FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-10">
      {/* Judul */}
      <h1 className="text-xl font-semibold text-gray-800">Hallo mas... welcome to Portofoliomukti</h1>

      {/* Search + User */}
      <div className="flex items-center space-x-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Cari..."
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Notifikasi */}
        <button className="text-gray-600 hover:text-blue-500">
          <FaBell size={20} />
        </button>

        {/* User */}
        <button className="text-gray-600 hover:text-blue-500">
          <FaUserCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
