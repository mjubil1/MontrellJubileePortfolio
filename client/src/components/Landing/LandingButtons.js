import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap';

class LandingButtons extends Component {
  render() {
    return (
      <div style={{ display: "flex", textAlign: "center", marginLeft: "33%" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Software Developer</Card.Title>
            <Button href="/portfolio" variant="primary" size="lg" style={{ marginTop: "1em" }}>Checkout Portfolio</Button>
          </Card.Body>
        </Card>
        <Card style={{ marginLeft: "2em", width: "18rem" }}>
          <Card.Body>
            <Card.Title>Real Estate Agent</Card.Title>
            <Button href="/real-estate" variant="primary" size="lg" style={{ marginTop: "1em" }}>Looking to do Business</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LandingButtons;