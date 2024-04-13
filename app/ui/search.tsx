'use client';
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAdminContext } from "../provider";
 
export default function Search({ placeholder }: { placeholder: string }) {
  const { searchValue, setsearchValue } = useAdminContext()
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();


  function handleSearch(term: string) {
    setsearchValue(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  }
 
  return (
    <div className="flex flex-col p-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-40 xl:w-full rounded border border-gray-200 p-2 xl:p-5 text-xs  xl:text-3xl outline-2 xl:outline-8 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={searchValue}
      />
    </div>
  );
}