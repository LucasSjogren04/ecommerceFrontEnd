import fflogo from "@/public/FreakyFashionLogo.png"
import heroimage from "@/public/HeroImage.png"
import spot1 from "@/public/spot1.png"
import spot2 from "@/public/spot2.png"
import spot3 from "@/public/spot3.png"
import HomePageProductList from "./ui/homePageProductList";
import FakeSearch from "./ui/fakeSearch";
import Link from "next/link"
export default async function Page({ searchParams, }: { searchParams?: { q: string; }; }) {
  const q = searchParams?.q || '';

  return (
    <>
      <div className="py-2 px-3 flex items-center xl:p-8">
        <Link href="http://localhost:3000">
        <img className="max-w-32 xl:min-w-80" src={fflogo.src} alt="logo" />
        </Link>
        
        <FakeSearch placeholder="Search products..." />
      </div>
      <div className="p-3 xl:px-9  xl:space-x-4 space-x-2 text-xs xl:text-2xl">
        <Link href="localhost:3000">Home</Link>
        <Link href="localhost:3000">Offers</Link>
        <Link href="localhost:3000">Campaigns</Link>
      </div>
      <div className="grid grid-cols-2 p-3 xl:p-8 xl:px-64">
        <div className="p-1 pr-3">
          <p className="text-center xl:text-8xl pb-1 font-thin">Modern fashion</p>
          <p className="text-center text-tiny xl:text-xl">Embrace your uniqueness and let your style be your signature. With every stitch, we weave stories of confidence, elegance, and empowerment. Dare to dream, dare to dazzle, and let your fashion journey ignite the world with beauty.</p>
        </div>
        <div className="min-w-full">
          <img className="min-w-full rounded-lg xl:rounded-xl" src={heroimage.src} alt="Hero image" />
        </div>
      </div>
      <div className="flex space-x-2 font-thin p-2 justify-center xl:px-48">
        <a href="">
          <div className="relative">
            <img src={spot1.src} alt="" />
            <div className="absolute inset-0 flex items-center justify-center xl:text-7xl">Timeless</div>
          </div>
        </a>
        <a href="">
          <div className="relative">
            <img src={spot2.src} alt="" />
            <div className="absolute inset-0 flex items-center justify-center xl:text-7xl">On-trend</div>
          </div>
        </a>
        <a href="">
          <div className="relative">
            <img src={spot3.src} alt="" />
            <div className="absolute inset-0 flex items-center justify-center xl:text-7xl">Must-have</div>
          </div>
        </a>
      </div>
      <div className="p-2 xl:px-64">
        <HomePageProductList />
      </div>
      <div className="flex justify-center space-x-2 text-tiny xl:text-2xl py-2">
        <div className="flex">
          <img className="max-w-5 xl:min-w-20" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z' /%3E%3C/svg%3E" alt="Globe Americas icon " />
          <p className="px-1 xl:pt-6 xl:px-10">Free Shipping</p>
        </div>
        <div className="flex">
          <img className="max-w-5 xl:min-w-20" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z' /%3E%3C/svg%3E" alt="Airplane engines icon" />
          <p className="px-1 xl:pt-6 xl:px-10">Express transport</p>
        </div>
        <div className="flex">
          <img className="max-w-5 xl:min-w-20" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56' /%3E%3Cpath d='M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0' /%3E%3C/svg%3E" alt="Shield check icon" />
          <p className="px-1 xl:pt-6 xl:px-10">Safe Payments</p>
        </div>
        <div className="flex">
          <img className="max-w-5 xl:min-w-20" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'/%3E%3Cpath d='M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5' /%3E%3C/svg%3E" alt="Smiley face" />
          <p className="px-1 xl:pt-6 xl:px-10">News everyday</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-around text-tiny py-2 xl:py-8">
        <div className="">
            <div>
                <h2 className="font-light text-xs pb-1 xl:text-4xl">Shopping</h2>
                <ul className="xl:text-xl">
                    <li>Winter Jackets</li>
                    <li>Puffer Jackets</li>
                    <li>Anoraks</li>
                    <li>Trenchcoat</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h2 className="font-light text-xs pb-1 xl:text-4xl">Profile</h2>
                <ul className="xl:text-xl">
                    <li>My orders</li>
                    <li>My account</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h2 className="font-light text-xs pb-1 xl:text-4xl">Customer service</h2>
                <ul className="xl:text-xl">
                    <li>Return policy</li>
                    <li>Our commitment</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-tiny xl:text-xl pb-2">
        ©Freaky Fashion
      </div>
    </>
  )
}
