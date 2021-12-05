import Button from '../atoms/Button'
import tw from 'twin.macro'
import Link from 'next/link'

const styles = {
  container: () => [
    tw`bg-red-500`
  ]
}

const Header: any = (props: any) => {
  const labels: NavigationLink[] = props.labels

  return (
    <div className="bg-red-500 flex flex-row justify-evenly">
      {labels.map((label, i) => 
        <Link key={i} href={label.url}>
          <a className="p-12 text-white bg-green-500 hover:bg-green-600">
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
    <footer className="h-auto bg-yellow-200 flex flex-row justify-evenly">
      <span className="p-8">footer</span>
    </footer>
  )
}

const Layout: any = (props: any) => { 

const labels: NavigationLink[] = [
  { name: 'home', url: '/' },
  { name: 'about', url: '/' },
  { name: 'palette', url: '/palette' },
]

return (
  <div className="h-full flex flex-col">
    <Header labels={labels} />
      <div className="w-full flex-grow flex justify-center items-center">
        {props.children}
      </div>
    <Footer />
  </div>
)

}

export default Layout;
