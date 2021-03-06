import Link from 'next/link'  
export default function CookieStandHeader(props){
    return(
        <header className="flex justify-between bg-green-500 text-black-100 p-3 items-center">
        <h1 className="font-semibold text-2xl font-sans mx-9">Cookie Stand Admin</h1>
        <Link href="/overview">
        <button className=" text-xs font-sans">OverView</button>
        </Link>
      </header>
    );
  }
