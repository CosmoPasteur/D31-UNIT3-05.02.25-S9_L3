import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import fantasy from "../data/fantasy.json";

const AllTheBooks = () => (
  <Container>
    <Row xs={1} sm={2} md={4} xl={5} xxl={6}>
      {fantasy.map((book) => (
        <Col key={book.asin} onClick={() => console.log(book)}>
          <Card style={{ borderColor: "white" }}>
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
  </Container>
);

export default AllTheBooks;
