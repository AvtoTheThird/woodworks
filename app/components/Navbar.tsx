import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" w-full  bg-slate-900  flex justify-center">
      <div className="flex justify-between items-center p-6 max-w-5xl w-full lg:flex bg-slate-900 text-white font-contractica-regular">
        <div>
          <Link href="/">სახლი</Link>
        </div>
        <div className="flex space-x-10">
          <Link href="/store">მაღაზია</Link>
          <Link href="/about">ჩვენს შესახებ</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
