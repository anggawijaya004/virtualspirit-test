import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPostAdd } from "../store/posts/action";

export default function Add() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(getPostAdd({ title, body }, navigate));
  };

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
