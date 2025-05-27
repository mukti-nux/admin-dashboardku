import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Home from "@/pages/Home";

export default function IndexPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          <Home />
        </div>
      </div>
    </div>
  );
}
