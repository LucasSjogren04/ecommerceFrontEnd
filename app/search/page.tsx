'use client'
import SearchFrame from "../ui/searchFrame";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAdminContext } from "../provider"
import Search from "../ui/search";
//The reason for not just passing the se
export default function SearchPage({ searchParams, }: { searchParams?: { q: string; }; }) {
    const { searchValue } = useAdminContext()
    const pathname = usePathname();
    const { replace } = useRouter();
    const q = searchValue || '';

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    handleSearch(searchValue);

    const setDefaultSearchValue = (): string => {
        if (searchValue === "") {
            return q
        }
        return searchValue;
    }

    return (
        <>
            <Search placeholder={setDefaultSearchValue()} />
            <SearchFrame query={searchValue} />
        </>
    )
}