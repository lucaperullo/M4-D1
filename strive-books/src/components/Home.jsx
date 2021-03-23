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
      <button className="categorySwitch" onClick={() => updateCurrent(fantasy)}>
        fantasy/
      </button>
      <button className="categorySwitch" onClick={() => updateCurrent(history)}>
        history/
      </button>
      <button className="categorySwitch" onClick={() => updateCurrent(horror)}>
        horror/
      </button>
      <button className="categorySwitch" onClick={() => updateCurrent(romance)}>
        romance/
      </button>
      <button className="categorySwitch" onClick={() => updateCurrent(scifi)}>
        scifi/
      </button>
      <Container fluid>
        <Row>
          {current.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card
                key={book.asin}
                style={{
                  width: "18rem",
                }}
              >
                <Card.Img
                  variant="top"
                  height="200"
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
                  <Button variant="primary">add to cart</Button>
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
