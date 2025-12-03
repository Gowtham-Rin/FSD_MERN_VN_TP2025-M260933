// App.jsx
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      {/* Top navigation */}
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Products route with nested children */}
        <Route path="/products" element={<Products />}>
          {/* Default content when visiting /products */}
          <Route index element={<p className="text-gray-600">Please select a category.</p>} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/* -------------------------
   Components in same file
-------------------------- */

// Home Component
function Home() {
  return <h2 className="p-4 text-xl">Home Page</h2>;
}

// Products Component
function Products() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      {/* Sub-navigation */}
      <nav className="flex gap-4 mb-4">
        <Link to="electronics" className="underline">Electronics</Link>
        <Link to="fashion" className="underline">Fashion</Link>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

// Electronics Component
function Electronics() {
  return <p className="text-gray-700">This is the Electronics section.</p>;
}

// Fashion Component
function Fashion() {
  return <p className="text-gray-700">This is the Fashion section.</p>;
}
