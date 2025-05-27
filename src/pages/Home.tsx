// pages/Home.jsx
import { FaChartBar, FaFileAlt, FaLock } from "react-icons/fa";
import StatistikCard from "../components/StatistikCard";
import StatistikChart from "../components/StatistikChart";

const Home = () => {
  return (
    <div className="space-y-6">
      {/* Statistik Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatistikCard title="Total Kunjungan" value="12.350" icon={<FaChartBar />} />
        <StatistikCard title="Total Dokumen" value="1.210" icon={<FaFileAlt />} />
        <StatistikCard title="Total Akses" value="3.845" icon={<FaLock />} />
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <StatistikChart />
      </div>
    </div>
  );
};

export default Home;
