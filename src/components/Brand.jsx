import { useState, useContext } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import BrandContext from "../context/BrandContext";

function Brand() {

    const { brands, name, setName, brandToEdit, addBrand, editBrand, cancelEdit, deleteBrand } = useContext(BrandContext);

    return (
        <>
            <Form className="d-grid gap-2 mb-3" onSubmit={addBrand}> 

                <Form.Control type="text" size="sm" className="bg-transparent text-white" placeholder="name..." value={name} onChange={e => setName(e.target.value)} required/>
                
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Button type="submit" variant="primary" className="badge" disabled={name.length < 1}>Submit</Button>
                        <Button type="button" variant="secondary" className={`badge ${brandToEdit.edit ? '': 'd-none'}`} onClick={cancelEdit}>Cancel</Button>
                    </div>
                    <span className="text-white small">{brands.length}</span>
                </div>

            </Form>

            <ListGroup className="gap-1">

                {brands.map(brand => (
                    <ListGroup.Item className="py-1 px-2 primary-bg-color text-white border-0 d-flex justify-content-between align-items-center" key={brand.id}>
                        <small>{brand.name}</small>
                        <div>
                            <Button type="button" variant="" className="badge" onClick={() => editBrand(brand)}>
                                <BsPencilFill className="text-primary" /> 
                            </Button>
                            <Button type="button" variant="" className="badge" onClick={() => deleteBrand(brand.id)}>
                                <BsFillTrashFill className="text-danger" />
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}

            </ListGroup>
        </>
    )

}

export default Brand;