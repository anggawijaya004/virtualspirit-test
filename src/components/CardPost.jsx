import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostDelete } from "../store/posts/action";

export default function CardPost({ post }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const deletePost = () => {
    dispatch(getPostDelete(post.id));
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{post.title ?? ""}</Card.Title>
        <Card.Text>{post.body ?? ""}</Card.Text>
      </Card.Body>
      <div className="d-flex gap-3 justify-content-end m-3">
        <Button
          variant="primary"
          onClick={() =>
            navigate(`/edit/${post.id}`, {
              state: {
                post,
              },
            })
          }
        >
          Edit
        </Button>
        <Button onClick={deletePost} variant="danger">
          Delete
        </Button>
      </div>
    </Card>
  );
}
