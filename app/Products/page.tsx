import Search from "../ui/search";
export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string
    }
} }) {
    return <Search placeholder="Search products..." />
}
