const StatistikCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-4 min-w-[200px]">
      <div className="text-blue-500 text-3xl">{icon}</div>
      <div className="overflow-hidden">
        <div className="text-sm text-gray-500 truncate">{title}</div>
        <div className="text-xl font-bold text-gray-800 truncate">{value}</div>
      </div>
    </div>
  );
};

export default StatistikCard