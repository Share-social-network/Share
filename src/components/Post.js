import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Post() {
  const [post, setPost] = useState("");

  const { v4: uuidv1 } = require("uuid");
  const uid = uuidv1();
  const onPostChange = (e) => setPost(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { post, uid };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:1337/Posts", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter post"
            onChange={onPostChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Post;
