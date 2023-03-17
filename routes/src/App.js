import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Blog from "./components/Blog";
import BlogItem from "./components/BlogItem";
import blogs from "./components/mockData";

import "./App.css";
import ROUTES from "./components/constants/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Blog blogs={blogs} />} />

          {blogs.map((blog) => (
            <Route
              key={blog.id}
              path={ROUTES.HOME + `images/${blog.id}`}
              element={<BlogItem blog={blog} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
