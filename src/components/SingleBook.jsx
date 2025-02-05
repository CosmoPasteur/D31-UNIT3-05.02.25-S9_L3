// const SingleBook = (prop) => {
//     return (

//     )
// };

// export default SingleBook;

// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function SingleBook(props) {
//   return (
//     <Container>
//       <Row xs={1} sm={2} md={4} xl={5} xxl={6}>
//         <Card>
//           <Card.Img variant="top" src={props.book.Img} />
//           <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </Row>
//     </Container>
//   );
// }

import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import fantasy from "../data/fantasy.json";

const SingleBook = (props) => (
  <Container>
    <Row xs={1} sm={2} md={4} xl={5} xxl={6}>
      {fantasy.map((book) => (
        <Col key={book.asin} onClick={() => console.log(book)}>
          <Card style={{ borderColor: "white" }}>
            <Card.Img variant="top" src={props.book.img} />
            <Card.Body>
              <Card.Title>{props.book.title}</Card.Title>
              <Card.Text>{props.book.category}</Card.Text>
              <Card.Text>
                <Badge bg="info">${props.book.price}</Badge>
              </Card.Text>
              <Button variant="primary">Aggiungi al carrello</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default SingleBook;
