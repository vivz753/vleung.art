import Button from "../core/Button"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { FC } from "react"

type NavigationLink = {
  name: string
  url: string
}

const labels: NavigationLink[] = [
  { name: "portfolio", url: "/" },
  { name: "about", url: "/about" },
  { name: "lessons", url: "/lessons" },
]

const Header: FC = () => {
  return (
    <header className="absolute top-0 flex h-[72px] w-full flex-row items-center gap-5 bg-yellow-600 p-10">
      {labels.map((label, i) => (
        <Link key={i} href={label.url}>
          <span className="mx-4 rounded-xl text-white hover:text-yellow-900">{label.name}</span>
        </Link>
      ))}
    </header>
  )
}

const Footer: FC = () => {
  return (
    <footer className="absolute bottom-0 flex h-24 w-full flex-col items-center justify-center gap-4 bg-yellow-600 md:flex-row lg:gap-8 lg:p-10">
      <div className="flex flex-row items-center gap-2">
        <Link href="vivz753@gmail.com">
          <MdOutlineMailOutline className="h-6 w-6 text-white hover:text-yellow-800 md:h-8 md:w-8" />
        </Link>
        <span className="text-white">vivz753@gmail.com</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Link href="https://instagram.com/carrotjuicelol">
          <FaInstagram className="h-6 w-6 text-white hover:text-yellow-800 md:h-8 md:w-8" />
        </Link>
        <span className="text-white">carrotjuicelol</span>
      </div>
    </footer>
  )
}

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-screen flex-grow flex-col justify-center">
      <Header />
      <Footer />
      <div className="h-full min-h-screen w-full pb-24 pt-[72px]">{children}</div>
    </div>
  )
}

export default Layout
