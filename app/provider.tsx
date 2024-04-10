"use client"
import { createContext, useContext, useState } from "react";

interface AdminContextType {
    editing: boolean;
    setEditing: React.Dispatch<React.SetStateAction<boolean>>;
    productForEdit: string;
    setProductForEdit: React.Dispatch<React.SetStateAction<string>>;
    creating: boolean;
    setCreating: React.Dispatch<React.SetStateAction<boolean>>;
    deleting: boolean;
    setDeleting: React.Dispatch<React.SetStateAction<boolean>>;
    searchValue: string;
    setsearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValues: AdminContextType = {
    editing: false,
    setEditing: () => {},
    productForEdit: "",
    setProductForEdit: () => {},
    creating: false,
    setCreating: () => {},
    deleting: false,
    setDeleting: () => {}, 
    searchValue: "",
    setsearchValue: () => {},
};

const AdminContext = createContext<AdminContextType>(defaultValues);

export function AdminWrapper({children}: { children: React.ReactNode;}) {
    const [editing, setEditing] = useState(false);
    const [creating, setCreating] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [productForEdit, setProductForEdit] = useState<string>("");
    const [searchValue, setsearchValue] = useState<string>("");

    return(
        <AdminContext.Provider value={{
            editing, setEditing, productForEdit, setProductForEdit, creating, setCreating, deleting, setDeleting, searchValue, setsearchValue}}>
            {children}
        </AdminContext.Provider>
    )
}

export function useAdminContext(){
    return useContext(AdminContext);
}