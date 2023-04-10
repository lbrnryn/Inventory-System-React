import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, ListGroup } from "react-bootstrap";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";

function Brand({ brands, setBrands }) {

    const [brandID, setBrandID] = useState("");
    const [brandName, setBrandName] = useState("");
    const [edit, setEdit] = useState(false);

    const addBrand = (e) => {
        e.preventDefault();
        setBrands([...brands, { _id: uuidv4(), name: brandName }]);
        setBrandName("");
    }

    const editBrand = ({ _id, name}) => {
        setEdit(true);
        setBrandName(name);
        setBrandID(_id);
    };

    const updateBrands = (e) => {
        e.preventDefault();
        
        const copyBrands = [...brands];
        const foundBrand = copyBrands.find(brand => brand._id === brandID);
        foundBrand.name = brandName;

        setBrands(copyBrands);
        setBrandID("");
        setBrandName("");
    };

    const cancelEditSubmit = () => {
        setEdit(false);
        setBrandID("");
        setBrandName("");
    };

    const deleteBrand = ({ _id }) => {
        if (confirm(`Are you sure you want to delete this brand?`)) {
            const updBrands = brands.filter(brand => brand._id !== _id);
            setBrands(updBrands);
            setEdit(false);
            setBrandID("");
            setBrandName("");
        }
    };

    return (
        <>
            <Form className="d-grid gap-2 mb-3" onSubmit={ e => edit ? updateBrands(e) : addBrand(e) }> 

                <Form.Control type="text" size="sm" className="bg-transparent text-white" onChange={ e => setBrandName(e.target.value) } value={ brandName } placeholder="Brandname..."/>

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Button type="submit" variant="primary" className="badge">{!edit ? "Submit": "Edit"}</Button>
                        <Button type="button" variant="secondary" className={ `badge ${!edit && "d-none"}` } onClick={ cancelEditSubmit }>Cancel</Button>
                    </div>
                    <span className="text-white small">{ brands.length }</span>
                </div>

            </Form>

            <ListGroup className="gap-1">

                { brands.map(brand => (
                    <ListGroup.Item className="py-1 px-2 primary-bg-color text-white border-0 d-flex justify-content-between align-items-center" key={ brand._id }>
                        <small className="text-capitalize">{ brand.name }</small>
                        <div>
                            <Button type="button" variant="" className="badge" onClick={ () => editBrand(brand) }>
                                <BsPencilFill className="text-primary" /> 
                            </Button>
                            <Button type="button" variant="" className="badge" onClick={ () => deleteBrand(brand) }>
                                <BsFillTrashFill className="text-danger" />
                            </Button>
                        </div>
                    </ListGroup.Item>
                )) }

            </ListGroup>
        </>
    )
}

export default Brand;