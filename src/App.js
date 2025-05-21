import { FaChartBar, FaFileAlt, FaLock } from "react-icons/fa";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import StatistikCard from "./components/StatistikCard";
import StatistikChart from "./components/StatistikChart";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 bg-gray-50 flex-1 overflow-y-auto space-y-6">
          {/* Kamu bisa tambah konten lain di bawah */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <StatistikCard title="Total Kunjungan" value="12.350" icon={<FaChartBar />} />
             <StatistikCard title="Total Dokumen" value="1.210" icon={<FaFileAlt />} />
             <StatistikCard title="Total Akses" value="3.845" icon={<FaLock />} />
             <div>
              <StatistikChart />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
