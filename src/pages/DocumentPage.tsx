"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";

interface Dokumen {
  id: string;
  name: string;
  link: string;
  status: string;
  traffic?: number;
}

export default function Document() {
  const [documents, setDocuments] = useState<Dokumen[]>([]);

  useEffect(() => {
    const docRef = ref(db, "dokumen");
    const unsubscribe = onValue(docRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const result = Object.entries(data).map(([id, value]: any) => ({
          id,
          ...value,
        }));
        setDocuments(result);
      } else {
        setDocuments([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Dokumentasi</h2>
        <Link href="/TambahDokumen">
  <a className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
    + Tambah Dokumen
  </a>
</Link>

      </div>

      <div className="flex flex-col gap-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{doc.name}</h3>
                <p className="text-sm text-gray-600">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      doc.status === "Online"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {doc.status}
                  </span>
                </p>
                <p className="text-sm text-gray-600">{doc.traffic || 0} klik</p>
              </div>
              <div>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  Buka
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
