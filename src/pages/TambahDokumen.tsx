"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { ref, push } from "firebase/database";
import { useRouter } from "next/router";

export default function TambahDokumen() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    link: "",
    status: "Online",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await push(ref(db, "dokumen"), {
      ...form,
      traffic: 0,
    });
    router.push("/Document");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Tambah Dokumen</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Nama Dokumen"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="url"
          name="link"
          placeholder="Link Dokumen"
          value={form.link}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
