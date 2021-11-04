import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

function Uposts() {
  const [data, setData] = useState([]);

  //Get Method

  fetch("http://localhost:1337/Posts")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json);
    });

  return (
    <div>
      <div>
        <ul>
          {data.map((item) => (
            <div key={item.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>{item.post}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Uposts;
