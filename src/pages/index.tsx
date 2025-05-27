import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Home from "@/pages/Home";
import Document from "./DocumentPage";
import Setting from "./SettingPage";
import Statistik from "./SettingPage";

export default function IndexPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          <Home />
          <Document/>
          <Setting/>
          <Statistik/>
        </div>
      </div>
    </div>
  );
}
