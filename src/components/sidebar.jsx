import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow h-full">
      <div className="p-4 font-bold text-lg">Dashboard</div>
      <ul className="space-y-2 p-4">
        <li><Link to="/" className="block hover:text-blue-500">Home</Link></li>
        <li><Link to="/statistik" className="block hover:text-blue-500">Statistik</Link></li>
        <li><Link to="/document" className="block hover:text-blue-500">Document</Link></li>
        <li><Link to="/setting" className="block hover:text-blue-500">Setting</Link></li>
        <li><button className="block hover:text-red-500">Logout</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
