'use client'
import { useAdminContext } from "../provider"
import AdminEditForm from "./adminEditForm";

export default function AdminManager({children}: {children: React.ReactNode}) {
    const { editing, setEditing } = useAdminContext();
    return (
        <>
            {!editing &&
                <>{children}</>
            }
            {editing &&
                <AdminEditForm />
            }
        </>
    )
}