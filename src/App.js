import Sidebar from "./components/sidebar";
import Header from "./components/header";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          {/* Di sinilah nanti grafik dan konten lainnya */}
          <h2 className="text-2xl font-bold mb-4">Statistik Pengguna</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
