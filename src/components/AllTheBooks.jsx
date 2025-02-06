import { Component } from "react";
import { Alert, Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import fantasy from "../data/fantasy.json";
import history from "../data/fantasy.json";
import horror from "../data/fantasy.json";
import romance from "../data/fantasy.json";
import scifi from "../data/fantasy.json";

class AllTheBooks extends Component {
  state = {
    books: history,
  };
  render() {
    return (
      <Container>
        <div className="d-flex gap-1 my-4 justify-content-center">
          <Button variant="primary" onClick={() => this.setState({ books: fantasy })}>
            fantasy
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: history })}>
            history
          </Button>
          <Button variant="danger" onClick={() => this.setState({ books: horror })}>
            horror
          </Button>
          <Button variant="success" onClick={() => this.setState({ books: romance })}>
            romance
          </Button>
          <Button variant="info" onClick={() => this.setState({ books: scifi })}>
            scifi
          </Button>
        </div>
        <Row xs={1} sm={2} md={4} xl={5} xxl={6}>
          {this.state.books.map((book) => (
            <Col key={book.asin} onClick={() => console.log(book)}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>
                    <Badge bg="info">${book.price}</Badge>
                  </Card.Text>
                  <Button variant="primary">Aggiungi al carrello</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {this.state.books.lenght === 0 && (
          <Alert variant="warning" className="mt-4">
            Premi il bottone per visualizzare dei libri
          </Alert>
        )}
      </Container>
    );
  }
}

export default AllTheBooks;
