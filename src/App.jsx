import { Container, Row, Col } from "react-bootstrap";
import Brand from "./components/Brand";
import Part from "./components/Part";
// import Stock from "./components/Stock";
// import Dispatch from "./components/Dispatch";
// import Unit from "./components/Unit";
// import { BrandContext, PartContext } from "./Context";
import { BrandContextProvider } from "./context/BrandContext";
import { PartContextProvider } from "./context/PartContext";

function App() {

  return (
    <BrandContextProvider>
      {/* <PartContextProvider> */}
        <Container className="mt-5">
          <Row xs={1} md={2} className="g-5">

            <Col>
              <Brand />
            </Col>

            {/* <Col>
              <Part />
            </Col>

            <Col>
              <Stock />
            </Col>

            <Col>
              <Dispatch />
            </Col>

            <Col>
              <Unit />
            </Col> */}

          </Row>
          
        </Container>
      {/* </PartContextProvider> */}
    </BrandContextProvider>
  )
}

export default App;