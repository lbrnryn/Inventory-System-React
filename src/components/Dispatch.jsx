import { Form, Button } from "react-bootstrap";

function Dispatch() {
    return (
        <>
            <Form className="d-grid gap-2 mb-3">
              <div className="d-sm-flex">
                <Form.Select size="sm" className="bg-transparent text-white">
                  <option value="">Select Unit</option>
                </Form.Select>
                <Form.Select size="sm" className="bg-transparent text-white">
                  <option value="">Select Stock</option>
                </Form.Select>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Button type="submit" variant="primary" className="badge">Submit</Button>
                <span className="text-white small">0</span>
              </div>
            </Form>

            <Form.Control type="text" size="sm" className="bg-transparent text-white border-0 border-bottom rounded-0" placeholder="Search Records" />
        </>
    )
}

export default Dispatch