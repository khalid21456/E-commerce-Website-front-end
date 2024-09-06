import Link from "next/link";
import Image from "next/image";
import Product from "../Product/page";
import BookIcon from '@mui/icons-material/Book';
export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-orange-400">
      <div className="flex">
        <div id="logo" className="h-20 w-60 ml-10 mt-1 bg-orange-400">
          <Image width={600} height={400} alt="logo" src="/images/logo3.png"/>
        </div>
        <div className="flex justify-between w-[1200px]">
          <div className="flex mt-6 ml-10  text-white" style={{fontFamily:"Montserrat"}}>
            <Link
              href="/"
              className="mr-10 hover:text-orange-400 transition-colors"
            >
              Men
            </Link>
            <Link href="/Product" className="mr-10 hover:text-orange-400 transition-colors">
              Womens
            </Link>
            <Link href="/blog" className="mr-10 hover:text-orange-400 transition-colors">
              Beauty
            </Link>
            <Link href="#" className="mr-10 hover:text-orange-400 transition-colors">
              Sport
            </Link>
            <Link href="#" className="mr-10 hover:text-orange-400 transition-colors">
              Child
            </Link>
            <Link href="#" className="mr-10 hover:text-orange-400 transition-colors">
              Special
            </Link>
            <Link href="#" className="mr-10 hover:text-orange-400 transition-colors">
              Brands
            </Link>
          </div>
          <div className="mt-6">
            <BookIcon style={{color:"white",cursor:"pointer"}}/>
          </div>
        </div>
      </div>
    </nav>
  );
}
