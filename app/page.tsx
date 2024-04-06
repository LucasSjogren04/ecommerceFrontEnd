import Search from "./ui/search";
import HomePageProductList from "./ui/homePageProductList";
import { SearchForProducts } from "./lib/data";
import { Suspense } from "react";
export default async function Page({searchParams,}: { searchParams?: {q: string;};}) {
  const q = searchParams?.q || '';

    


  return (
    <>
      <Search placeholder="Search products..." />
      <HomePageProductList query={q} />
    </>
  )
}
