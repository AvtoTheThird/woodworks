import Image from "next/image";
import Navbar from "./components/Navbar";
import GoToStoreButton from "./components/GoToStoreButton";
import Slider from "./components/Slider";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Navbar />
      <section className=" flex justify-center flex-row gap-6  bg-slate-300 min-w-full relative">
        <img
          className="w-full h-[36rem] object-cover relative blur-sm  overflow-hidden"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWwMSrFJJQDGyHR-k_p4dRfTOn3xQV5U4xw&usqp=CAU"
          alt=""
        />
        <div className="absolute inset-0 flex justify-center items-center flex-col ">
          <div className="bg-slate-300 p-4 rounded-lg w-full text-center bg-opacity-70">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-contractica-medium">
              ხელნაკეთი ხის რაღაცეების მაღაზია
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug mb-4 font-contractica-medium">
              ნჩარხი key words key words key words
            </h2>
          </div>
          <Link
            href="/store"
            className="bg-orange-400 hover:bg-orange-700 transition-colors text-black font-bold my-4 py-4 px-8 rounded font-contractica-light "
          >
            მაღაზია
          </Link>{" "}
        </div>
      </section>
      <div className="flex flex-col items-center justify-center h-96 bg-gray-700 w-full">
        <h3> aqac rame daiweros</h3>
      </div>
      <Slider />
    </main>
  );
}
