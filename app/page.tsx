import Search from "./ui/search";
import HomePageProductList from "./ui/homePageProductList";
import { SearchForProducts } from "./lib/data";
import { Suspense } from "react";
import FakeSearch from "./ui/fakeSearch";
export default async function Page({ searchParams, }: { searchParams?: { q: string; }; }) {
  const q = searchParams?.q || '';

  return (
    <>
      <FakeSearch placeholder="Search products..." />
      <HomePageProductList />
    </>
  )
}
