/*
 * Design: Structured Elegance — Neo-Corporate
 * Admin Projects: Password-protected admin panel
 * Only admin can: Add, Edit, Delete custom projects
 * Default projects are read-only (cannot be deleted)
 * Uses localStorage for persistence
 * Regular users have NO access — password gate blocks them
 */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Plus, Trash2, Lock, Pencil, LogOut, Check, X, Eye } from "lucide-react";
import { defaultProjects, PROJECTS_KEY } from "@/components/ProjectsSection";
import type { Project } from "@/components/ProjectsSection";
import { toast } from "sonner";

const APOLLO_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/apollo-logo_9d73a455.png";
const ADMIN_KEY = "apollo_admin_auth";
const ADMIN_PASSWORD = "apollo2024";

const emptyForm = {
  tag: "",
  title: "",
  summary: "",
  image: "",
  description: "",
  detail1Label: "",
  detail1Value: "",
  detail2Label: "",
  detail2Value: "",
  detail3Label: "",
  detail3Value: "",
  detail4Label: "",
  detail4Value: "",
};

function projectToForm(p: Project) {
  return {
    tag: p.tag,
    title: p.title,
    summary: p.summary,
    image: p.image,
    description: p.description,
    detail1Label: p.details[0]?.label || "",
    detail1Value: p.details[0]?.value || "",
    detail2Label: p.details[1]?.label || "",
    detail2Value: p.details[1]?.value || "",
    detail3Label: p.details[2]?.label || "",
    detail3Value: p.details[2]?.value || "",
    detail4Label: p.details[3]?.label || "",
    detail4Value: p.details[3]?.value || "",
  };
}

export default function AdminProjects() {
  const [, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [customProjects, setCustomProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    const auth = sessionStorage.getItem(ADMIN_KEY);
    if (auth === "true") setIsAuthenticated(true);
    const stored = localStorage.getItem(PROJECTS_KEY);
    if (stored) {
      try {
        setCustomProjects(JSON.parse(stored));
      } catch {
        // ignore
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_KEY, "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_KEY);
    setIsAuthenticated(false);
    setPassword("");
  };

  const formToProject = (): Project => {
    const details = [
      { label: form.detail1Label, value: form.detail1Value },
      { label: form.detail2Label, value: form.detail2Value },
      { label: form.detail3Label, value: form.detail3Value },
      { label: form.detail4Label, value: form.detail4Value },
    ].filter((d) => d.label && d.value);

    return {
      id: editingId || form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      tag: form.tag,
      title: form.title,
      summary: form.summary,
      image: form.image,
      description: form.description,
      details,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const project = formToProject();
    let updated: Project[];

    if (editingId) {
      updated = customProjects.map((p) => (p.id === editingId ? project : p));
      toast.success(`"${project.title}" updated successfully.`);
    } else {
      // Check for duplicate ID
      const allIds = [...defaultProjects, ...customProjects].map((p) => p.id);
      if (allIds.includes(project.id)) {
        toast.error("A project with a similar title already exists. Please use a different title.");
        return;
      }
      updated = [...customProjects, project];
      toast.success(`"${project.title}" added successfully.`);
    }

    setCustomProjects(updated);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(updated));
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleEdit = (project: Project) => {
    setForm(projectToForm(project));
    setEditingId(project.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: string) => {
    const project = customProjects.find((p) => p.id === id);
    const updated = customProjects.filter((p) => p.id !== id);
    setCustomProjects(updated);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(updated));
    setDeleteConfirm(null);
    toast.success(`"${project?.title}" has been removed.`);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  // ─── Login Screen ───
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4">
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 w-full max-w-md shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Lock size={20} className="text-[#F7931E]" />
            <h2
              className="text-[#0D3B7A] text-xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Admin Access
            </h2>
          </div>
          <p className="text-[#6b7280] text-sm text-center mb-6">
            This area is restricted to authorized administrators only.
            <br />
            Enter your password to manage projects.
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm mb-3 focus:outline-none focus:border-[#F7931E] transition-colors"
            />
            {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#F7931E] hover:bg-[#FDB95B] text-[#0D3B7A] font-semibold text-sm py-3 rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>
          <button
            onClick={() => setLocation("/")}
            className="mt-4 w-full text-[#6b7280] text-sm hover:text-[#F7931E] transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ─── Admin Dashboard ───
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-[#0D3B7A] py-4">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2.5 text-white no-underline"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <img src={APOLLO_LOGO} alt="Apollo Solar" className="w-8 h-8 object-contain" />
            <span className="text-base font-black">
              Apollo <span className="text-[#F7931E]">Solar</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <span className="text-[#F7931E] text-xs font-semibold tracking-wider uppercase hidden sm:inline">
              Admin Panel
            </span>
            <button
              onClick={() => setLocation("/")}
              className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-white/40 hover:text-red-400 text-sm font-medium transition-colors ml-2"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1
              className="text-[#0D3B7A] text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Manage Projects
            </h1>
            <p className="text-[#9ca3af] text-sm mt-1">
              {defaultProjects.length} default + {customProjects.length} custom = {defaultProjects.length + customProjects.length} total projects visible on the website
            </p>
          </div>
          {!showForm && (
            <button
              onClick={() => {
                setForm(emptyForm);
                setEditingId(null);
                setShowForm(true);
              }}
              className="flex items-center gap-2 bg-[#F7931E] hover:bg-[#FDB95B] text-[#0D3B7A] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shrink-0"
            >
              <Plus size={16} />
              Add New Project
            </button>
          )}
        </div>

        {/* ─── Add / Edit Form ─── */}
        {showForm && (
          <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 mb-8 shadow-sm">
            <h3
              className="text-[#0D3B7A] text-lg font-bold mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {editingId ? "Edit Project" : "New Project"}
            </h3>
            <p className="text-[#9ca3af] text-xs mb-5">
              {editingId
                ? "Update the fields below and save your changes."
                : "Fill in the details below. The project will appear on the public website immediately."}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#4a5568] text-xs font-medium mb-1">
                    Tag <span className="text-[#9ca3af]">(e.g. Residential, Commercial, Off-Grid)</span>
                  </label>
                  <input
                    required
                    value={form.tag}
                    onChange={(e) => setForm({ ...form, tag: e.target.value })}
                    className="w-full border border-[#E5E5E5] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#F7931E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#4a5568] text-xs font-medium mb-1">
                    Project Title
                  </label>
                  <input
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full border border-[#E5E5E5] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#F7931E] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#4a5568] text-xs font-medium mb-1">
                  Image URL <span className="text-[#9ca3af]">(paste a direct link to the image)</span>
                </label>
                <input
                  required
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full border border-[#E5E5E5] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#F7931E] transition-colors"
                />
                {form.image && (
                  <div className="mt-2 w-24 h-16 rounded-md overflow-hidden border border-[#E5E5E5]">
                    <img
                      src={form.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-[#4a5568] text-xs font-medium mb-1">
                  Short Summary <span className="text-[#9ca3af]">(shown on project card)</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                  className="w-full border border-[#E5E5E5] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#F7931E] resize-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#4a5568] text-xs font-medium mb-1">
                  Full Description <span className="text-[#9ca3af]">(shown on detail page)</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full border border-[#E5E5E5] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#F7931E] resize-none transition-colors"
                />
              </div>

              {/* Details fields */}
              <div>
                <label className="block text-[#4a5568] text-xs font-medium mb-2">
                  Project Specs <span className="text-[#9ca3af]">(up to 4 key-value pairs)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="flex gap-2">
                      <input
                        placeholder={`Label ${n}`}
                        value={(form as any)[`detail${n}Label`]}
                        onChange={(e) =>
                          setForm({ ...form, [`detail${n}Label`]: e.target.value })
                        }
                        className="flex-1 border border-[#E5E5E5] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#F7931E] transition-colors"
                      />
                      <input
                        placeholder={`Value ${n}`}
                        value={(form as any)[`detail${n}Value`]}
                        onChange={(e) =>
                          setForm({ ...form, [`detail${n}Value`]: e.target.value })
                        }
                        className="flex-1 border border-[#E5E5E5] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#F7931E] transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#F7931E] hover:bg-[#FDB95B] text-[#0D3B7A] font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
                >
                  <Check size={14} />
                  {editingId ? "Save Changes" : "Add Project"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex items-center gap-2 bg-[#E5E5E5] hover:bg-[#d5d5d5] text-[#4a5568] font-medium text-sm px-6 py-2.5 rounded-lg transition-colors"
                >
                  <X size={14} />
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ─── Default Projects (read-only) ─── */}
        <div className="mb-10">
          <h3 className="text-[#0D3B7A] text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
            <Lock size={12} className="text-[#9ca3af]" />
            Default Projects ({defaultProjects.length})
            <span className="text-[#9ca3af] text-xs font-normal normal-case ml-1">— read-only</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {defaultProjects.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-[#E5E5E5] rounded-lg p-4 flex gap-4 items-start"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <span className="text-[#F7931E] text-[0.65rem] font-semibold uppercase">
                    {p.tag}
                  </span>
                  <h4 className="text-[#0D3B7A] text-sm font-semibold leading-tight truncate">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => setLocation(`/projects/${p.id}`)}
                      className="flex items-center gap-1 text-[#2C6CCF] hover:text-[#154E9F] text-xs transition-colors"
                    >
                      <Eye size={12} /> View
                    </button>
                    <span className="text-[#d1d5db] text-xs">Built-in</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Custom Projects (editable) ─── */}
        <div>
          <h3 className="text-[#0D3B7A] text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
            <Pencil size={12} className="text-[#F7931E]" />
            Custom Projects ({customProjects.length})
            <span className="text-[#9ca3af] text-xs font-normal normal-case ml-1">— editable</span>
          </h3>

          {customProjects.length === 0 ? (
            <div className="bg-white border border-dashed border-[#d1d5db] rounded-lg p-8 text-center">
              <p className="text-[#9ca3af] text-sm mb-3">
                No custom projects yet. Click "Add New Project" to create one.
              </p>
              <p className="text-[#d1d5db] text-xs">
                Custom projects will appear on the public website alongside the default ones.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {customProjects.map((p) => (
                <div
                  key={p.id}
                  className="bg-white border border-[#E5E5E5] rounded-lg p-4 flex gap-4 items-start relative"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[#F7931E] text-[0.65rem] font-semibold uppercase">
                      {p.tag}
                    </span>
                    <h4 className="text-[#0D3B7A] text-sm font-semibold leading-tight truncate">
                      {p.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => setLocation(`/projects/${p.id}`)}
                        className="flex items-center gap-1 text-[#2C6CCF] hover:text-[#154E9F] text-xs transition-colors"
                      >
                        <Eye size={12} /> View
                      </button>
                      <button
                        onClick={() => handleEdit(p)}
                        className="flex items-center gap-1 text-[#F7931E] hover:text-[#d97706] text-xs transition-colors"
                      >
                        <Pencil size={12} /> Edit
                      </button>
                      {deleteConfirm === p.id ? (
                        <span className="flex items-center gap-1.5 text-xs">
                          <span className="text-red-500">Delete?</span>
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="text-red-500 hover:text-red-700 font-semibold"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="text-[#9ca3af] hover:text-[#4a5568]"
                          >
                            No
                          </button>
                        </span>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirm(p.id)}
                          className="flex items-center gap-1 text-red-400 hover:text-red-600 text-xs transition-colors"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
