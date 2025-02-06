// import { Component } from "react";
import { Alert, Container, Row } from "react-bootstrap";

import SingleBook from "./SingleBook";

const BookList = () => {
  return (
    <Container>
      <Row xs={1} sm={2} md={4} xl={5} xxl={6}>
        {?.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
      {?.lenght === 0 && (
        <Alert variant="warning" className="mt-4">
          Premi il bottone per visualizzare dei libri
        </Alert>
      )}
    </Container>
  );
};

export default BookList;
