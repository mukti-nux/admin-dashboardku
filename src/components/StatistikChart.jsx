// components/StatistikChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', pengguna: 400 },
  { name: 'Feb', pengguna: 700 },
  { name: 'Mar', pengguna: 600 },
  { name: 'Apr', pengguna: 800 },
  { name: 'Mei', pengguna: 950 },
  { name: 'Jun', pengguna: 700 },
  { name: 'Jul', pengguna: 1100 },
  { name: 'Agu', pengguna: 1200 },
  { name: 'Sep', pengguna: 1000 },
  { name: 'Okt', pengguna: 1300 },
  { name: 'Nov', pengguna: 1400 },
  { name: 'Des', pengguna: 1500 },
];

const StatistikChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Grafik Pengguna per Bulan</h2>
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pengguna" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatistikChart;
