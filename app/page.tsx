import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <title>ხონჩა</title>
      <Navbar />
      <section className="overflow-hidden flex justify-center flex-row gap-6  bg-slate-300 min-w-full relative">
        <img
          className="w-full h-[36rem] object-cover relative blur-sm   "
          src="1.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex justify-center items-center flex-col ">
          <div className="bg-slate-300 flex justify-center items-center flex-col h-[190px] p-4 rounded-lg w-full text-center bg-opacity-50">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900   font-contractica-medium">
              ხის ხელნაკეთი ნივთების ონლაინ მაღაზია
            </h1>
            {/* <h2 className="text-2xl md:text-3xl lg:w-[1200px] lg:text-3xl font-semibold text-gray-800 leading-snug mb-4 font-contractica-medium">
                მაღალი ხარისხის ხისგან დამზადებული ჩვენი პროდუქცია არა მხოლოდ
                ფუნქციონალურია, არამედ ასახავს მასალის ბუნებრივ სილამაზეს
              </h2> */}
          </div>
          <Link
            href="/store"
            className="bg-orange-400 hover:bg-orange-700 transition-colors text-black font-bold my-4 py-4 px-8 rounded font-contractica-light "
          >
            მაღაზია
          </Link>{" "}
        </div>
      </section>
      <div className="flex flex-col items-center justify-center h-64 lg:h-52 bg-gray-700 w-full ">
        <h2 className="text-2xl md:text-3xl lg:w-[1200px] lg:text-3xl  font-semibold text-white text-center leading-snug  font-contractica-medium">
          მაღალი ხარისხის ხისგან დამზადებული ჩვენი პროდუქცია არა მხოლოდ
          ფუნქციონალურია, არამედ ასახავს მასალის ბუნებრივ სილამაზეს
        </h2>
      </div>
      <Slider />
      <Footer />
    </main>
  );
}
