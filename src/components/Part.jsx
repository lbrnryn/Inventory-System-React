import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, ListGroup } from "react-bootstrap";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";

function Part({ brands, parts, setParts }) {

    const [partID, setPartID] = useState("");
    const [partName, setPartName] = useState("");
    const [brand, setBrand] = useState("");
    const [edit, setEdit] = useState(false);

    // const onSubmitPartForm = (e) => {
    //     e.preventDefault();
        
    //     if (edit) {
    //         const updParts = parts.map(part => part._id === partId ? {_id: part._id, name: partName, brand} : part);
    //         setParts(updParts);
    //         setEdit(false);
    //         setPartId("");
    //         setPartName("");
    //         setBrand("Select Brand");
    //     } else {
    //         setParts([...parts, { _id: uuidv4(), name: partName, brand }]);
    //         setPartName("");
    //         setBrand("Select Brand");
    //     }
    // };

    const addPart = (e) => {
        e.preventDefault();
        setParts([...parts, { _id: uuidv4(), name: partName, brand }]);
        setPartName("");
        setBrand("Select Brand");
    }

    const editPart = ({ _id, name, brand }) => {
        setEdit(true);
        setPartName(name);
        setPartID(_id);
        setBrand(brand);
    };

    const updateParts = (e) => {
        e.preventDefault();
        const copyParts = [...parts];
        const foundPart = copyParts.find(part => part._id === partID);
        foundPart.name = partName;
        foundPart.brand = brand;

        setParts(copyParts);
        setPartID("");
        setPartName("");
        setBrand("Select Brand");
    };

    const cancelEditSubmit = () => {
        setEdit(false);
        setPartID("");
        setPartName("");
        setBrand("Select Brand");
    };

    const deletePart = ({ _id }) => {
        if (confirm(`Are you sure you want to delete this part?`)) {
            const updParts = parts.filter(part => part._id !== _id);
            setParts(updParts);
            setEdit(false);
            setPartID("");
            setPartName("");
            setBrand("Select Brand");
        }
    };

    return (
        <>
            <Form className="d-grid gap-2 mb-3" onSubmit={ e => edit ? updateParts(e) : addPart(e) }>

                <div className="d-sm-flex">

                    <Form.Control type="text" size="sm" className="bg-transparent text-white" onChange={ e => setPartName(e.target.value) } value={ partName } placeholder="Partname..." />
                    
                    <Form.Select size="sm" className="bg-transparent text-white" onChange={ e => setBrand(e.target.value) } value={ brand }>
                        <option value="">Select Brand</option>
                        { brands.map(brand => <option value={ brand.name } key={ brand._id }>{ brand.name }</option> ) }
                    </Form.Select>

                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Button type="submit" variant="primary" className="badge">{ !edit ? "Submit": "Edit" }</Button>
                        <Button type="button" variant="secondary" className={ `badge ${!edit && "d-none"}` } onClick={ cancelEditSubmit }>Cancel</Button>
                    </div>
                    <span className="text-white small">{ parts.length }</span>
                </div>

            </Form>

            <ListGroup>
                {parts.map(part => (
                    <ListGroup.Item className="py-1 px-2 primary-bg-color text-white border-0 d-flex justify-content-between align-items-center" key={ part._id }>
                        <small className="text-capitalize">{part.name}</small>
                        <div className="">
                            <Button type="button" variant="" className="badge" onClick={ () => editPart(part) }>
                                <BsPencilFill className="text-primary" /> 
                            </Button>
                            <Button type="button" variant="" className="badge" onClick={ () => deletePart(part) }>
                                <BsFillTrashFill className="text-danger" />
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    )
}

export default Part