import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav>
      <section className="bg-[#51B2AC] flex justify-end items-center py-2 px-16 gap-8">
        <div className="flex items-center gap-2">

          <Link href="/search" className="text-white flex flex-row gap-2 items-center">
            <Image src="/searchicon.webp" alt="Search" width={100} height={100} className="w-[14px] h-[14px]" />
            <span className="text-white">Search</span>
          </Link>

        </div>
        <div className="flex items-center gap-2">

          <span className="text-white flex flex-row gap-2 items-center">Toll free number:
            <Image src="/phone.webp" alt="Phone " className="h-full" width={15} height={20} />1800 889 8255</span>
        </div>
      </section>

      <section className="relative z-30 bg-[#F5F6E5]">
        <div className="flexBetween px-16 ">
          <div className="flex justify-start relative">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={120}
                className="relative  -bottom-7"
              />
            </Link>
          </div>
          <div className="flex justify-end gap-10 items-center">
            <ul className="hidden h-full gap-8 lg:flex ">
              {NAV_LINKS.map((links) => (
                <Link
                  href={links.href}
                  key={links.key}
                  className="regular-16 text-black-50 flexEnd cursor-pointer pb-1.5 transition-all hover:underline decoration-sky-500"
                >
                  {links.label}
                </Link>
              ))}
            </ul>
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          </div>
        </div>

      </section>
    </nav>
  );
};

export default Navbar;
