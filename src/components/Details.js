import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Details() {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState("");

  const [phonenumber, setPhonenumber] = useState("");
  const email = currentUser.email;
  const [verification, setVerification] = useState(false);

  const history = useHistory();
  const uid = currentUser.uid;

  const onUsernameChange = (e) => setUsername(e.target.value);

  const onPhonenumberChange = (e) => setPhonenumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { username, phonenumber, uid, email, verification };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:1337/Profiles", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));

    history.push("/");
  };

  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={onUsernameChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phonenumber</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={onPhonenumberChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Details;
