import Link from "next/link";
import Product from "../Product/page";
import BookIcon from '@mui/icons-material/Book';
import "../../../public/logo.png"
export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-orange-400">
      <div className="flex">
        <div id="logo" className="h-20 w-60 bg-orange-400">
          <img alt="logo"  src="../../../public/logo.png"/>
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
