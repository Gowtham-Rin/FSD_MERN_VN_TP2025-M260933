import React, { useState } from "react";

export default function FruitListWithDelete() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  const [newFruit, setNewFruit] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (newFruit.trim() === "") return;

    setFruits([...fruits, newFruit.trim()]);
    setNewFruit("");
  };

  const handleDelete = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Fruit List</h2>

      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Enter a fruit..."
          className="flex-1 p-2 border rounded"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Add
        </button>
      </form>

      <ul className="list-disc pl-5">
        {fruits.map((fruit, index) => (
          <li key={index} className="flex justify-between py-1">
            {fruit}
            <button
              onClick={() => handleDelete(index)}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
