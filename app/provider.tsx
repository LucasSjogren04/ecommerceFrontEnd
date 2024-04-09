"use client"
import { createContext, useContext, useState } from "react";

interface AdminContextType {
    editing: boolean;
    setEditing: React.Dispatch<React.SetStateAction<boolean>>;
    productForEdit: string;
    setProductForEdit: React.Dispatch<React.SetStateAction<string>>;
    creating: boolean;
    setCreating: React.Dispatch<React.SetStateAction<boolean>>;

}

const defaultValues: AdminContextType = {
    editing: false,
    setEditing: () => {},
    productForEdit: "",
    setProductForEdit: () => {},
    creating: false,
    setCreating: () => {}, 
};

const AdminContext = createContext<AdminContextType>(defaultValues);

export function AdminWrapper({children}: { children: React.ReactNode;}) {
    const [editing, setEditing] = useState(false);
    const [creating, setCreating] = useState(false);
    const [productForEdit, setProductForEdit] = useState<string>("");

    return(
        <AdminContext.Provider value={{
            editing, setEditing, productForEdit, setProductForEdit, creating, setCreating}}>
            {children}
        </AdminContext.Provider>
    )
}

export function useAdminContext(){
    return useContext(AdminContext);
}