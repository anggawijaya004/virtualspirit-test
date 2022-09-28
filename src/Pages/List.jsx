import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CardPost from "../components/CardPost";
import { getPosts } from "../store/posts/action";

export default function List() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { posts, loadingPosts, loadingPostDelete } = useSelector(
    (state) => state.PostReducer
  );

  useEffect(() => {
    if (!posts) dispatch(getPosts());
  }, []);

  useEffect(() => {
    if (loadingPostDelete) {
      Swal.showLoading();
    } else {
      Swal.close();
    }
  }, [loadingPostDelete]);

  return (
    <Container>
      <div className="d-flex justify-content-between m-4">
        <h2>List Posts</h2>
        <Button onClick={() => navigate("/add")}>Add Post</Button>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {loadingPosts && <div>Load Data</div>}
        {posts && posts.map((post, i) => <CardPost key={i} post={post} />)}
      </div>
    </Container>
  );
}
