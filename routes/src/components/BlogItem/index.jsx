import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../Button";
import styles from "./index.module.scss";
import ROUTES from "../constants/routes";

const BlogItem = (props) => {
  const { blog } = props;
  console.log(blog);
  return (
    <div className={styles.container}>
      <img className={styles.animalImg} src={blog.img} alt={blog.alt} />
      <p className={styles.info}>{blog.info}</p>
      <div className={styles.btn}>
        <Button>
          <Link className={styles.back} to={ROUTES.HOME}>
            Back
          </Link>
        </Button>
      </div>
    </div>
  );
};
BlogItem.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  info: PropTypes.string,
};
BlogItem.defaultProps = {
  img: "no image provided",
  alt: "",
  info: "no information found",
};

export default BlogItem;

//<Link to={ROUTES.HOME}>Back to Blog List</Link>
