import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween  px-16 relative z-30 py-5 bg-[#F5F6E5]">
      <div className="flex justify-start">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={80.54} height={97.69} />
        </Link>
      </div>
      <div className="flex justify-end gap-10 items-center">
        <ul className="hidden h-full gap-8 lg:flex pt-[10px]"> {/* Align to the right */}
          {NAV_LINKS.map((links) => (
            <Link href={links.href} key={links.key} className="regular-16 text-black-50
                 flexEnd cursor-pointer pb-1.5 transition-all hover:underline  decoration-sky-500 ">
              {links.label}
            </Link>
          ))}
        </ul>

        <Image
          src="admin.svg"
          alt="menu"
          width={15}
          height={18.53}
          className="cursor-pointer lg:flexEnd hidden"
        />

        <div className="lg:flexCenter hidden">
          <button className="bg-[#51B2AC] hover:bg-gray-400 text-gray-800 p-5 rounded-full">
            <Image
              src="phone.svg"
              alt="Phone"
              width={36}
              height={36}
            />
          </button>

        </div>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />

    </nav>
  )
}

export default Navbar
