import { useState } from "react";
import fantasy from "../assets/jsons/fantasy.json";
import history from "../assets/jsons/history.json";
import horror from "../assets/jsons/horror.json";
import romance from "../assets/jsons/romance.json";
import scifi from "../assets/jsons/scifi.json";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Home() {
  const [current, updateCurrent] = useState(horror);

  return (
    <Container fluid>
      <div className="navbarr">
        <button
          className="category start"
          onClick={() => updateCurrent(fantasy)}
        >
          /fantasy/
        </button>
        <button className="category" onClick={() => updateCurrent(history)}>
          /history/
        </button>
        <button className="category" onClick={() => updateCurrent(horror)}>
          /horror/
        </button>
        <button className="category" onClick={() => updateCurrent(romance)}>
          /romance/
        </button>
        <button className="category end" onClick={() => updateCurrent(scifi)}>
          /scifi/
        </button>
      </div>

      <Container fluid className="mainContent">
        <h1 style={{ marginBottom: "50px", color: "white" }}>
          Just an avarage website
        </h1>
        <Row>
          {current.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} className="book" key={book.asin}>
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <Card.Img
                  className="image"
                  variant="top"
                  height="200"
                  lazyLoad={true}
                  src={book.img}
                  alt={book.title}
                />
                <Card.Body
                  style={{
                    height: "170px",
                  }}
                >
                  <Card.Title
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {book.title}
                  </Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="danger">add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default Home;
