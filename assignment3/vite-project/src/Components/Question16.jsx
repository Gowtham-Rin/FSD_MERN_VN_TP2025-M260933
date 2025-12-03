import React, { useState } from "react";
import axios from "axios";

export default function AddPost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://dummyjson.com/posts/add", post)
      .then((res) => {
        console.log(res.data);
        setMessage("Post Added!");
        setPost({ title: "", body: "" }); // clear form
      })
      .catch((err) => {
        console.error("Error:", err);
        setMessage("Failed to add post.");
      });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <label className="block mb-2 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter post title"
        />

        {/* Body */}
        <label className="block mb-2 font-medium">Body</label>
        <textarea
          name="body"
          value={post.body}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter post content"
        ></textarea>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="mt-4 text-green-600 font-medium">{message}</p>
      )}
    </div>
  );
}
