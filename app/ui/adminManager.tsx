'use client'
import { useAdminContext } from "../provider"

export default function AdminManager({children}: {children: React.ReactNode}) {
    const { editing, setEditing } = useAdminContext();
    return (
        <>
            {!editing &&
                <>{children}</>
            }
        </>
    )
}