import { useState } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";

function Stock({ brands, parts }) {

    const [part, setPart] = useState();

    const selectPart = (e) => setPart(e.target.value);

    return (
        <>
            <Form className="d-grid gap-2 mb-3">
                <Row xs={1} md={1} lg={2} className="g-2">
                <Col>
                    <Form.Select size="sm" className="bg-transparent text-white text-capitalize" onChange={e => selectPart(e)}>
                        <option value="">Select Part...</option>
                        {parts.map(part => (
                            <option className="text-capitalize" key={part.name} value={part.name} >{part.name}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select size="sm" className="bg-transparent text-white">
                        <option value="">Select Brand...</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Control type="number" size="sm" className="bg-transparent text-white" placeholder="Qty." />
                </Col>
                <Col>
                    <Form.Control type="number" size="sm" className="bg-transparent text-white" placeholder="Price" />
                </Col>
                </Row>
            </Form>

            <div className="d-flex justify-content-between align-items-center">
                <Button type="submit" variant="primary" className="badge">Submit</Button>
                <span className="text-white small">1</span>
            </div>

            <Table striped bordered size="sm" variant="dark" className="mt-3 small">
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Brand</td>
                    <td>Qty</td>
                    <td>Price</td>
                    <td className="col-1">Action</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Air Filter</td>
                    <td>555</td>
                    <td>2</td>
                    <td>180</td>
                    <td>
                        <div className="d-flex">
                            <Button type="button" variant="" className="badge">
                            <BsPencilFill className="text-primary" /> 
                            </Button>
                            <Button type="button" variant="" className="badge">
                            <BsFillTrashFill className="text-danger" />
                            </Button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Stock