import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, ListGroup } from "react-bootstrap";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import BrandContext from "../context/BrandContext";

function Brand() {

    const { brands, setBrands } = useContext(BrandContext);

    const [brandName, setBrandName] = useState('');
    const [brandID, setBrandID] = useState('');
    const [isEditBrand, setIsEditBrand] = useState(false);

    const handleAddBrand = (e) => {
        e.preventDefault();

        setBrands([...brands, { _id: uuidv4(), name: brandName }]);
        setBrandName('');
    }

    const handleEditBrand = ({ _id, name }) => {
        setBrandName(name);
        setBrandID(_id);
        setIsEditBrand(true);
    }

    const handleUpdateBrand = (e) => {
        e.preventDefault();

        setBrands(brands.map(brand => brand._id === brandID ? { ...brand, name: brandName } : brand));
        handleCancelEditBrand();
    }

    const handleCancelEditBrand = () => {
        setBrandName('');
        setBrandID('');
        isEditBrand && setIsEditBrand(false);
    }

    const handleDeleteBrand = (id) => { 
        setBrands(brands.filter(brand => brand._id !== id));
        handleCancelEditBrand();
    }

    return (
        <>
            <Form className="d-grid gap-2 mb-3" onSubmit={!isEditBrand ? handleAddBrand : handleUpdateBrand}> 

                <Form.Control type="text" size="sm" className="bg-transparent text-white" placeholder="Brandname..." value={brandName} onChange={e => setBrandName(e.target.value)} />

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Button type="submit" variant="primary" className="badge" disabled={brandName.length < 1}>{!isEditBrand ? "Submit" : "Update"}</Button>
                        <Button type="button" variant="secondary" className={`badge ${!isEditBrand && "d-none"}`} onClick={handleCancelEditBrand}>Cancel</Button>
                    </div>
                    <span className="text-white small">{brands.length}</span>
                </div>

            </Form>

            <ListGroup className="gap-1">

                {brands.map(brand => (
                    <ListGroup.Item className="py-1 px-2 primary-bg-color text-white border-0 d-flex justify-content-between align-items-center" key={brand._id}>
                        <small>{brand.name}</small>
                        <div>
                            <Button type="button" variant="" className="badge" onClick={() => handleEditBrand(brand)}>
                                <BsPencilFill className="text-primary" /> 
                            </Button>
                            <Button type="button" variant="" className="badge" onClick={() => handleDeleteBrand(brand._id)}>
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