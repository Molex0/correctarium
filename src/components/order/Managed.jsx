import { createContext } from "react";
import React, { useState, useEffect } from "react"

export const ManagedUI = createContext(undefined);

//Context Wrapper
export function ManagedUIProvider({ children }) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <ManagedUI.Provider
            value={{
                openModal,
                setOpenModal,
            }}
        >
            {children}
        </ManagedUI.Provider>
    );
}