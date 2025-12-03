import React, { useState } from 'react';

// FruitList.jsx
// Start with an array of fruits in state and provide a form to add new fruits dynamically.

export default function FruitList() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Mango']);
  const [newFruit, setNewFruit] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = newFruit.trim();
    if (!value) {
      setError('Please enter a fruit name.');
      return;
    }
    if (fruits.some((f) => f.toLowerCase() === value.toLowerCase())) {
      setError('This fruit is already in the list.');
      return;
    }

    setFruits((prev) => [...prev, value]);
    setNewFruit('');
    setError('');
  };

  const removeFruit = (index) => {
    setFruits((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Fruit List</h2>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Add a fruit..."
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Add
        </button>
      </form>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <ul className="list-disc pl-5">
        {fruits.map((fruit, i) => (
          <li key={i} className="flex justify-between items-center py-1">
            <span>{fruit}</span>
            <button
              onClick={() => removeFruit(i)}
              className="text-sm text-red-600 hover:underline ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
