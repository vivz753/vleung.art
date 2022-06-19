import Button from '../atoms/Button'
import tw from 'twin.macro'
import Link from 'next/link'
import { FaTwitter, FaInstagram } from 'react-icons/fa'

const styles = {
  container: () => [
    tw`bg-red-500`
  ]
}

const Header: any = (props: any) => {
  const labels: NavigationLink[] = props.labels

  return (
    <div className="p-10 bg-yellow-200 flex flex-row gap-5">
      {labels.map((label, i) => 
        <Link key={i} href={label.url}>
          <a className="p-4 text-white rounded-xl bg-black hover:bg-gray-900">
            {label.name}
          </a>
        </Link>
      )}
    </div>
  )
}

type NavigationLink = {
  name: string;
  url: string;
}

const Footer: any = (props: any) => {
  return (
    <footer className="h-auto p-10 bg-yellow-200 flex flex-row items-center gap-5">
      <Link href="https://twitter.com/vaginamilktea">
        <a>
          <FaTwitter className="w-10 h-10" />
        </a>
      </Link>
      <Link href="https://instagram.com/carrotjuicelol">
        <a>
          <FaInstagram className="w-10 h-10" />
        </a>
      </Link>
    </footer>
  )
}

const Layout: any = (props: any) => { 

const labels: NavigationLink[] = [
  { name: 'home', url: '/' },
  { name: 'about', url: '/about' },
  { name: 'palette', url: '/palette' },
]

return (
  <div className="min-h-screen border-red-500 flex flex-grow flex-col">
    <Header labels={labels} />
      <div className="my-auto w-full justify-center items-center">
        {props.children}
      </div>
    <Footer />
  </div>
)

}

export default Layout;
