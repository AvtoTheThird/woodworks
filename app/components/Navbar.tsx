import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav data-nosnippet className=" w-full  bg-slate-900  flex justify-center">
      <div className="flex justify-between items-center px-6 py-2 max-w-5xl w-full lg:flex bg-slate-900 text-white font-contractica-regular">
        <div>
          <Link href="/">
            <Image
              src="/header-logo.svg" // path to your image in the public directory
              alt="Example Image"
              width={80} // specify the width of the image
              height={80} // specify the height of the image
            />
          </Link>
        </div>
        <div className="flex space-x-10 items-center text-center">
          <Link href="/store">მაღაზია</Link>
          <Link href="/about">ჩვენს შესახებ</Link>
          <Link href="/contact">კონტაქტი</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
