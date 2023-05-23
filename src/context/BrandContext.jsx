import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const BrandContext = createContext();
export default BrandContext;

export const BrandContextProvider = ({ children }) => {
    const [brands, setBrands] = useState([]);
    const [name, setName] = useState('');
    const [brandToEdit, setBrandToEdit] = useState({ id: '', edit: false });

    const addBrand = (e) => {
        e.preventDefault();
        if (!brandToEdit.edit) {
            setBrands([...brands, { id: uuidv4(), name }]);
            setName('');
        } else {
            setBrands(brands.map(brand => brand.id === brandToEdit.id ? { ...brand, name } : brand));
            setName('');
            setBrandToEdit({ id: '', edit: false });
        }
    }

    const editBrand = (brand) => {
        setBrandToEdit({id: brand.id, edit: true});
        setName(brand.name);
    }

    const cancelEdit = () => {
        setBrandToEdit({ id: '', edit: false });
        setName('');
    }

    const deleteBrand = (id) => { 
        setBrands(brands.filter(brand => brand.id !== id));
        cancelEdit();
    }

    return (
        <BrandContext.Provider value={{ brands, setBrands, name, setName, brandToEdit, addBrand, editBrand, cancelEdit, deleteBrand }}>
            {children}
        </BrandContext.Provider>
    )
};
