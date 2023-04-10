import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Brand from "./components/Brand";
import Part from "./components/Part";
import Stock from "./components/Stock";
import Dispatch from "./components/Dispatch";
import Unit from "./components/Unit";

function App() {
  
  const [brands, setBrands] = useState([]);
  const [parts, setParts] = useState([]);

  return (
    <Container className="mt-5">
      <Row xs={1} md={2} className="g-5">

        <Col>
          <Brand brands={brands} setBrands={setBrands} />
        </Col>

        <Col>
          <Part brands={brands} parts={parts} setParts={setParts} />
        </Col>

        <Col>
          <Stock brands={brands} parts={parts} />
        </Col>

        <Col>
          <Dispatch />
        </Col>

        <Col>
          <Unit />
        </Col>

      </Row>
      
    </Container>
  )
}

export default App
