
import React from 'react';
import { Navbar, Container, Nav, Card} from 'react-bootstrap';

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <h1>Welcome to My React App</h1>

         
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>Some text for Card 1.</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>Some text for Card 2.</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>Some text for Card 3.</Card.Text>
              </Card.Body>
            </Card>
  
        </Container>
      </div>
    </>
  );
};

export default App;


