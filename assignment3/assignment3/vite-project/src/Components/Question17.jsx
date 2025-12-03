import React, { useEffect, useState } from "react";

/**
 * UserEdit.jsx
 *
 * - Fetches user data from https://dummyjson.com/users/1
 * - Displays details in controlled inputs (firstName, lastName, username, email, phone)
 * - Allows editing and submits updates via PUT to the same endpoint
 *
 * Notes:
 * - dummyjson accepts PUT on /users/1 and returns the updated object.
 * - This component uses fetch; you can swap to axios if you prefer.
 */

export default function UserEdit() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true); // initial fetch
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false); // during PUT
  const [message, setMessage] = useState("");

  // Fetch user on mount
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/users/1")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Map the fields we care about into local state
        setUser({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          username: data.username || "",
          email: data.email || "",
          phone: data.phone || "",
        });
        setError(null);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Error loading user data.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    setError(null);

    try {
      const res = await fetch("https://dummyjson.com/users/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Update failed: ${res.status} ${text}`);
      }

      const updated = await res.json();
      // reflect any returned data (optional)
      setUser({
        firstName: updated.firstName || "",
        lastName: updated.lastName || "",
        username: updated.username || "",
        email: updated.email || "",
        phone: updated.phone || "",
      });

      setMessage("User updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      setError("Error updating user. See console for details.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-4 text-center">Loading user...</p>;
  if (error) return <p className="p-4 text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit User</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={() => {
              // Simple reset to original by refetching (optional)
              setLoading(true);
              fetch("https://dummyjson.com/users/1")
                .then((res) => res.json())
                .then((data) =>
                  setUser({
                    firstName: data.firstName || "",
                    lastName: data.lastName || "",
                    username: data.username || "",
                    email: data.email || "",
                    phone: data.phone || "",
                  })
                )
                .finally(() => setLoading(false));
            }}
            className="px-3 py-2 border rounded"
          >
            Reset
          </button>
        </div>

        {message && <p className="text-green-600">{message}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}
