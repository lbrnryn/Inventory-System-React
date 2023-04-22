import { Form, Button } from "react-bootstrap";

function Unit() {
    return (
        <> 
            <Form className="d-grid gap-2">
                <Form.Control type="text" size="sm" className="bg-transparent text-white" placeholder="Unit Ex. ABC123/1234" />
                <div className="d-flex justify-content-between align-items-center">
                    <Button type="submit" variant="primary" className="badge">Submit</Button>
                    <span className="text-white small">0</span>
                </div>
            </Form>
        </>
    )
}

export default Unit