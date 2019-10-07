import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap';

class LandingButtons extends Component {
  render() {
    return (
      <div style={{ display: "flex", textAlign: "center", marginLeft: "30%" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
            <Card.Text>
              Do something cool
            </Card.Text>
            <Button href="/portfolio" variant="primary" size="lg" style={{ marginTop: "1em" }}>Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ marginLeft: "2em", width: "18rem" }}>
          <Card.Body>
            <Card.Title>Real Estate Agent</Card.Title>
            <Card.Text>Do something cool</Card.Text>
            <Button variant="primary" size="lg" style={{ marginTop: "1em" }}>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LandingButtons;