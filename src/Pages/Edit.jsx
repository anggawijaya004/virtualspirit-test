import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPostEdit } from "../store/posts/action";

export default function Edit() {
  let dispatch = useDispatch();
  const { state } = useLocation();
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(getPostEdit(state.post.id, { title, body }, navigate));
  };

  useEffect(() => {
    setTitle(state.post.title);
    setBody(state.post.body);
  }, [state]);

  return (
    <Container className="p-4">
      <form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Type post title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            onChange={(e) => setBody(e.target.value)}
            value={body}
            placeholder="Type post body"
          />
        </Form.Group>
        <div className="d-flex gap-3">
          <Button variant="primary" type={submit}>
            Submit
          </Button>
          <Button variant="danger" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  );
}
