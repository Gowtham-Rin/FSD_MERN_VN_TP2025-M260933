import React, { useEffect, useState } from "react";

export default function PaginatedUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1); // current page (1–4 for 20 users)
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const start = (page - 1) * usersPerPage;
  const currentUsers = users.slice(start, start + usersPerPage);

  const nextPage = () => {
    if (page < Math.ceil(users.length / usersPerPage)) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Paginated Users</h2>

      <ul className="space-y-2">
        {currentUsers.map((u) => (
          <li key={u.id} className="p-3 border rounded shadow-sm">
            <p><strong>{u.firstName} {u.lastName}</strong></p>
            <p className="text-gray-600">Email: {u.email}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="font-medium">Page {page}</span>

        <button
          onClick={nextPage}
          disabled={page === Math.ceil(users.length / usersPerPage)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
