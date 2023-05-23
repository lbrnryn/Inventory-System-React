import { useState, createContext } from "react";

const BrandContext = createContext();
export default BrandContext;

export const BrandContextProvider = ({ children }) => {
    const [brands, setBrands] = useState([]);

    return (
        <BrandContext.Provider value={{ brands, setBrands }}>
            {children}
        </BrandContext.Provider>
    )
};
