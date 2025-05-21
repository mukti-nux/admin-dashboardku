import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Januari", pengguna: 400 },
  { name: "Febuari", pengguna: 300 },
  { name: "Maret", pengguna: 500 },
  { name: "April", pengguna: 700 },
  { name: "Mei", pengguna: 600 },
  { name: "Juni", pengguna: 800 },
  { name: "juli", pengguna: 100},
  { name: "Agustus", pengguna: 200},
  { name: "September", pengguna: 250},
  { name: "Oktober", pengguna: 350},
  { name: "November", pengguna: 600},
  { name: "Desember", pengguna: 700},
];

const StatistikChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-96">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Grafik Pengguna</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pengguna" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatistikChart;
