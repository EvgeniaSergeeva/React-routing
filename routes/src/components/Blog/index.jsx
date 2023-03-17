import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ROUTES from "../constants/routes";
import styles from "./index.module.scss";

const Blog = ({ blogs }) => (
  <div className={styles.container}>
    <h1>Animal Blog</h1>
    {blogs.map((blog) => (
      <div key={blog.id} className={styles.animal}>
        <Link to={ROUTES.HOME + `images/${blog.id}`}>
          <img className={styles.animalImg} src={blog.img} alt={blog.alt} />
        </Link>
      </div>
    ))}
  </div>
);
Blog.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ),
};

export default Blog;
