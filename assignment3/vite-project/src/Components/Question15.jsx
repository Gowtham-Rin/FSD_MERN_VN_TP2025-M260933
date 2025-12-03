import React, { useState } from "react";

export default function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handles updating a specific field in the profile
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

      {/* Name Input */}
      <label className="block mb-2 font-medium">Name</label>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Email Input */}
      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Phone Input */}
      <label className="block mb-2 font-medium">Phone</label>
      <input
        type="text"
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <h3 className="text-xl font-semibold mt-4">Live Preview:</h3>
      <p><strong>Name:</strong> {profile.name || "—"}</p>
      <p><strong>Email:</strong> {profile.email || "—"}</p>
      <p><strong>Phone:</strong> {profile.phone || "—"}</p>
    </div>
  );
}
