import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        {/* Konten utama seperti Header & Grafik di sini */}
        <h1 className="text-2xl font-bold">Selamat datang di Admin Dashboard</h1>
      </div>
    </div>
  );
}

export default App;
