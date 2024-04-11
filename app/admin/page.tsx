
import AdminProductTable from "../ui/adminProductTable";
import AdminManager from "../ui/adminManager";
export default function Admin() {
    return (
        <>
            <div className="min-w-max bg-zinc-700">
                <div className="font-light text-center text-2xl p-2 xl:text-left xl:text-4xl xl:p-3">Administrator</div>
            </div>
            <AdminManager>
                <AdminProductTable />
            </AdminManager>
        </>
    )
}