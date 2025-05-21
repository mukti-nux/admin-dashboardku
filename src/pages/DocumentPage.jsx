// pages/Document.jsx
const documents = [
  {
    id: 1,
    name: "Panduan Pengguna",
    link: "https://google.drive/akumautidurmass03456123456",
    status: "Online",
    traffic: 124,
  },
  {
    id: 2,
    name: "Laporan Bulanan",
    link: "https://google.drive/akumaungapaiiiann2454refde324kmewrty",
    status: "Offline",
    traffic: 87,
  },
  {
    id: 3,
    name: "Manual Instalasi",
    link: "https://google.drive/ngantuknyaaadenef34fre42o33lk43nj4hrui456uyjhrges456",
    status: "Online",
    traffic: 230,
  },
];

const Document = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Daftar Dokumentasi</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow border">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Nama Dokumentasi</th>
              <th className="py-3 px-6 text-left">Link</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Traffic</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {documents.map((doc, index) => (
              <tr
                key={doc.id}
                className="border-b hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{doc.name}</td>
                <td className="py-3 px-6">
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all"
                  >
                    Lihat
                  </a>
                </td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      doc.status === "Online"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="py-3 px-6">{doc.traffic} klik</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Document;
