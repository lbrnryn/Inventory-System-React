import { useState, createContext } from "react";

const PartContext = createContext();
export default PartContext;

export const PartContextProvider = ({ children }) => {
    const [parts, setParts] = useState([])

    return (
        <PartContext.Provider value={{ parts, setParts }}>
            {children}
        </PartContext.Provider>
    )
};
