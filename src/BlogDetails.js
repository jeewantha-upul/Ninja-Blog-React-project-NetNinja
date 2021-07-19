import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Is Loading ...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
