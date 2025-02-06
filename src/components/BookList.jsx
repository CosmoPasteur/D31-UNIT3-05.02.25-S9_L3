import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Row xs={1} sm={2} md={4} xl={5} xxl={6}>
          {this.props.books.map((book) => {
            <SingleBook key={book.asin} book={book} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
