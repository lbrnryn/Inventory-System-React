import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, ListGroup } from "react-bootstrap";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import BrandContext from "../context/BrandContext";
import PartContext from "../context/PartContext";

function Part() {
    const { brands } = useContext(BrandContext);
    const { parts, setParts } = useContext(PartContext);

    const [partID, setPartID] = useState("");
    const [partName, setPartName] = useState("");
    const [brand, setBrand] = useState("");
    const [isEditPart, setIsEditPart] = useState(false);

    const handleAddPart = (e) => {
        e.preventDefault();
        setParts([...parts, { _id: uuidv4(), name: partName, brand }]);
        setPartName('');
        setBrand('Select Brand');
    }

    const handleEditPart = ({ _id, name, brand }) => {
        setPartName(name);
        setPartID(_id);
        setBrand(brand);
        setIsEditPart(false);
    };

    const handleUpdatePart = (e) => {
        e.preventDefault();

        setParts(parts.map(part => part._id === partID ? { ...part, name: partName, brand } : part));
        handleCancelEditPart();
    };

    const handleCancelEditPart = () => {
        setPartName('');
        setPartID('');
        setBrand('Select Brand');
        isEditPart && setIsEditPart(false);
    };

    const handleDeletePart = (id) => {
        setParts(parts.filter(part => part._id !== id));
        handleCancelEditPart();
    };

    return (
        <>
            <Form className="d-grid gap-2 mb-3" onSubmit={!isEditPart ? handleAddPart : handleUpdatePart}>

                <div className="d-sm-flex">

                    <Form.Control type="text" size="sm" className="bg-transparent text-white" onChange={e => setPartName(e.target.value)} value={partName} placeholder="Partname..." />
                    
                    <Form.Select size="sm" className="bg-transparent text-white" onChange={e => setBrand(e.target.value)} value={brand}>
                        <option value="">Select Brand</option>
                        {brands.map(brand => <option value={brand.name} key={brand._id}>{brand.name}</option> )}
                    </Form.Select>

                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Button type="submit" variant="primary" className="badge" disabled={partName.length < 1}>{!isEditPart ? "Submit": "Edit"}</Button>
                        <Button type="button" variant="secondary" className={`badge ${!isEditPart && "d-none"}`} onClick={handleCancelEditPart}>Cancel</Button>
                    </div>
                    <span className="text-white small">{parts.length}</span>
                </div>

            </Form>

            <ListGroup>
                {parts.map(part => (
                    <ListGroup.Item className="py-1 px-2 primary-bg-color text-white border-0 d-flex justify-content-between align-items-center" key={part._id}>
                        <small className="text-capitalize">{part.name}</small>
                        <div className="">
                            <Button type="button" variant="" className="badge" onClick={() => handleEditPart(part)}>
                                <BsPencilFill className="text-primary" /> 
                            </Button>
                            <Button type="button" variant="" className="badge" onClick={() => handleDeletePart(part._id)}>
                                <BsFillTrashFill className="text-danger" />
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    )
}

export default Part;