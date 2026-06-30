"use client";
import { useState, useEffect } from "react";
import { farmhouses as initialFarmhouses, Farmhouse } from "@/data/farmhouses";
import { Plus, Edit, Trash2, X, MapPin, Menu } from "lucide-react";

export default function AdminDashboard() {
  const [farmhouses, setFarmhouses] = useState<Farmhouse[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState<Farmhouse>({
    slug: "", name: "", location: "", description: "", capacity: 0, amenities: [], priceDisplay: "", images: [], featured: false
  });
  const [amenityInput, setAmenityInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setFarmhouses(initialFarmhouses);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "demo123") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong password! Hint: demo123");
    }
  };

  const resetForm = () => {
    setForm({ slug: "", name: "", location: "", description: "", capacity: 0, amenities: [], priceDisplay: "", images: [], featured: false });
    setAmenityInput("");
  };

  const openNewForm = () => {
    resetForm();
    setEditingIndex(null);
    setShowForm(true);
  };

  const openEditForm = (index: number) => {
    setForm({ ...farmhouses[index] });
    setEditingIndex(index);
    setShowForm(true);
  };

  const addAmenity = () => {
    if (amenityInput.trim() && !form.amenities.includes(amenityInput.trim())) {
      setForm({ ...form, amenities: [...form.amenities, amenityInput.trim()] });
      setAmenityInput("");
    }
  };

  const removeAmenity = (a: string) => {
    setForm({ ...form, amenities: form.amenities.filter(item => item !== a) });
  };

  const handleSave = () => {
    if (!form.name || !form.slug || !form.location) {
      alert("Name, slug, and location required");
      return;
    }
    const updated = [...farmhouses];
    if (editingIndex !== null) {
      updated[editingIndex] = form;
    } else {
      updated.push(form);
    }
    setFarmhouses(updated);
    setShowForm(false);
    resetForm();
  };

  const handleDelete = (index: number) => {
    if (confirm("Are you sure?")) {
      const updated = farmhouses.filter((_, i) => i !== index);
      setFarmhouses(updated);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
        <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button type="submit" className="w-full bg-slate-900 dark:bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-emerald-500 transition">
            Sign In
          </button>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">Demo password: demo123</p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <nav className="bg-white dark:bg-gray-900 shadow p-3 md:p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
        <button
          className="md:hidden p-1"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={20} className="text-gray-700 dark:text-gray-300" />
        </button>
        <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Farmhouse Admin</h1>
        <button onClick={openNewForm} className="flex items-center gap-1.5 bg-emerald-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-emerald-700 text-sm md:text-base">
          <Plus size={16} /> <span className="hidden sm:inline">Add New</span>
        </button>
      </nav>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 text-left">
                <tr>
                  <th className="p-3 md:p-4 font-medium">Name</th>
                  <th className="p-3 md:p-4 font-medium hidden sm:table-cell">Location</th>
                  <th className="p-3 md:p-4 font-medium">Capacity</th>
                  <th className="p-3 md:p-4 font-medium hidden md:table-cell">Featured</th>
                  <th className="p-3 md:p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {farmhouses.map((fh, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="p-3 md:p-4 font-medium text-gray-900 dark:text-white">{fh.name}</td>
                    <td className="p-3 md:p-4 text-gray-600 dark:text-gray-400 hidden sm:table-cell">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {fh.location}</span>
                    </td>
                    <td className="p-3 md:p-4">{fh.capacity}</td>
                    <td className="p-3 md:p-4 hidden md:table-cell">{fh.featured ? "✅" : "❌"}</td>
                    <td className="p-3 md:p-4">
                      <div className="flex gap-1.5 md:gap-2">
                        <button onClick={() => openEditForm(idx)} className="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 p-1 rounded">
                          <Edit size={16} />
                        </button>
                        <button onClick={() => handleDelete(idx)} className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900 p-1 rounded">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl p-5 md:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                {editingIndex !== null ? "Edit Farmhouse" : "New Farmhouse"}
              </h3>
              <button onClick={() => setShowForm(false)}><X /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name*</label>
                <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Slug*</label>
                <input value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Location*</label>
                <input value={form.location} onChange={e => setForm({...form, location: e.target.value})} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Capacity</label>
                <input type="number" value={form.capacity} onChange={e => setForm({...form, capacity: +e.target.value})} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Description</label>
                <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={3} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Price Display</label>
                <input value={form.priceDisplay} onChange={e => setForm({...form, priceDisplay: e.target.value})} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div className="flex items-center gap-2 mt-6">
                <input type="checkbox" checked={form.featured} onChange={e => setForm({...form, featured: e.target.checked})} />
                <label className="text-sm text-gray-700 dark:text-gray-300">Featured</label>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Images (comma separated URLs)</label>
                <input value={form.images.join(", ")} onChange={e => setForm({...form, images: e.target.value.split(",").map(s => s.trim())})} className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Amenities</label>
                <div className="flex gap-2">
                  <input value={amenityInput} onChange={e => setAmenityInput(e.target.value)} className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="e.g., Pool" />
                  <button onClick={addAmenity} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white text-sm">Add</button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {form.amenities.map(a => (
                    <span key={a} className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded-full text-xs">
                      {a} <button onClick={() => removeAmenity(a)}><X size={12} /></button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Cancel</button>
              <button onClick={handleSave} className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}