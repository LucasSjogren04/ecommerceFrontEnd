'use client'
import { useAdminContext } from "../provider"
import AdminEditForm from "./adminEditForm";
import AdminCreateForm from "./adminCreateForm";

export default function AdminManager({children}: {children: React.ReactNode}) {
    const { editing, creating, setCreating} = useAdminContext();
    return (
        <>
        <div className="bg-gray-400 cursor-pointer max-w-xs" onClick={() => setCreating(true)}>
            <div className="text-center p-2 font-light">New Product</div>
        </div>
            {!editing && !creating &&
                <>{children}</>
            }
            {editing &&
                <AdminEditForm />
            }
            {creating && 
                <AdminCreateForm />
            }
        </>
    )
}