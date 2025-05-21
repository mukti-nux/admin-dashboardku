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
  { name: "Jan", pengguna: 400 },
  { name: "Feb", pengguna: 300 },
  { name: "Mar", pengguna: 500 },
  { name: "Apr", pengguna: 700 },
  { name: "Mei", pengguna: 600 },
  { name: "Jun", pengguna: 800 },
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
