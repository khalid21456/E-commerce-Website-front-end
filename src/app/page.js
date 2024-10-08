import Counter from "./components/Counter";
import Image from "next/image";
import Slider from "./components/Slider";
export default function Home() {
  return (
    <div className="h-[2000px]">
      <div className="h-[500px] bg-orange-400">
        <div className="flex">
          <div>
            <div className="flex pt-24">
              <div className="w-[600px] ml-10">
                <h1
                  style={{ fontFamily: "Poppins" }}
                  className="text-5xl cursor-default font-bold text-white text-left"
                >
                  Buy Best Products From All Of The World
                </h1>
              </div>
            </div>
            <div className="ml-10 mt-7">
              <p
                className="w-[600px] text-white"
                style={{ fontFamily: "Roboto" }}
              >
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années
                1500.
              </p>
            </div>
            <div className="flex justify-around w-[350px] ml-8 mt-9">
              <button className="bg-white border-2 hover:bg-orange-400 hover:text-white hover:border-2 transition-all text-orange-400 font-bold py-2 px-12 rounded-full">
                Products
              </button>
              <button className="bg-orange-400 hover:bg-orange-300 transition-all text-white border-white border-2 font-bold py-2 px-12 rounded-full">
                Signup
              </button>
            </div>
          </div>
          <div className="ml-64">
            <Image src="/images/hero-page-image.png" height={700} width={500} />
          </div>
        </div>
      </div>
      <div id="newest-product" className="mt-12 ml-7 text-slate-800">
        <div>
          <h1 className="text-2xl font-bold" style={{fontFamily:"Varela Round"}}>Newest Products</h1>
        </div>
      
      </div>
    </div>
  );
}
