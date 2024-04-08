"use client"
import { createContext, useContext, useState } from "react";

interface AdminContextType {
    editing: boolean;
    setEditing: React.Dispatch<React.SetStateAction<boolean>>;
    productForEdit: string;
    setProductForEdit: React.Dispatch<React.SetStateAction<string>>;

}

const defaultValues: AdminContextType = {
    editing: false,
    setEditing: () => {},
    productForEdit: "",
    setProductForEdit: () => {}, 
};

const AdminContext = createContext<AdminContextType>(defaultValues);

export function AdminWrapper({children}: { children: React.ReactNode;}) {
    const [editing, setEditing] = useState(false)
    const [productForEdit, setProductForEdit] = useState<string>("");

    return(
        <AdminContext.Provider value={{
            editing, setEditing, productForEdit, setProductForEdit}}>
            {children}
        </AdminContext.Provider>
    )
}

export function useAdminContext(){
    return useContext(AdminContext);
}